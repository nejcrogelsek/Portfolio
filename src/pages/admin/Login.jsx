import React, { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
          //toast.success("Želim vam uspešen teden!")
      })
      .catch((err) => toast.error("Narobe vnešeni podatki!"));
  };
    return (
        <div className='login'>
            <ToastContainer />
      <div className='login__container'>
        <h2>Prijava</h2>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder="Vnesite vaš e-naslov"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder="Vnesite vaše geslo"
          />
          <button onClick={signin} type='submit' className='login__signInButton'>
            Prijava
          </button>
        </form>
        <button onClick={()=> history.push("/")} className='login__signInButton login__goback'>
            Nazaj domov
        </button>
      </div>
    </div>
    )
}

export default Login
