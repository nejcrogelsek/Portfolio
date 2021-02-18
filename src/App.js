import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import db, { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { getProjects, selectProjects } from "./features/projectsSlice";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Navbar from "./pages/admin/Navbar";
import Login from "./pages/admin/Login";
import LoadingScreen from "./pages/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(selectUser);
  const allProjects = useSelector(selectProjects);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
        console.log(authUser.uid);
      } else {
        //console.log("odjavlen");
        dispatch(logout());
      }
    });
    return () => {
      //Any cleanup operations
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    db.collection("projects")
      .orderBy("created_at", "desc")
      .onSnapshot((snapshot) => {
        dispatch(
          getProjects(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description,
              website: doc.data().website,
              github: doc.data().github,
              technologies: doc.data().technologies,
              url: doc.data().url,
            }))
          )
        );
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <ToastContainer />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/test'>
              {user && user.uid === process.env.REACT_APP_USER_ID ? (
                <Navbar />
              ) : (
                <Login />
              )}
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
