import React, { useState, useContext } from "react";
import "./Login.css";
import Logo from "../image/LabtinLogo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/AuthSlice";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userName, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(login(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      });
  };

  return (
    <div className="login_main_div">
      <div className="login_main">
        <div className="login_heading">
          <h1>Welcome Back!</h1>
        </div>
        <div className="login_form">
          <div className="login_form_entry">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              name="username"
              id="username"
              placeholder="example@gmail.com"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="login_form_entry">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="fs4353adf"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button className="submitButton" onClick={handleLogin}>
            Login
          </button>
          <div className="signUp_sec">
            <p>Don't have a account? </p>
            <Link to="/Register"> SignUp</Link>
          </div>
        </div>
        <div className="header_logo loginfooter">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      {error ? <p className="wError">Wrong Email and Password!</p> : null}
    </div>
  );
};

export default Login;
