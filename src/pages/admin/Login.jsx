import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import LockIcon from "@material-ui/icons/Lock";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Login() {
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  }, [user]);

  const signin = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <LockIcon onClick={signin} />
    </div>
  );
}

export default Login;
