import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Navbar from "./pages/admin/Navbar";
import Login from "./pages/admin/Login";
import LoadingScreen from "./pages/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: "123",
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
              {user && user.uid === "123" ? <Navbar /> : <Login />}
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
