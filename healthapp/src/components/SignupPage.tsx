import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import "./Login.css";
import Logo from "../image/LabtinLogo.png";
import { useDispatch } from "react-redux";
import { login } from "../store/AuthSlice";
import { updateProfile } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
const SignupPage = () => {
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, usersEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        dispatch(login(user.providerData));

        setDoc(doc(db, "users", user.uid), {
          usersName,
        });

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="login_main_div">
      <div className="login_main">
        <div className="login_heading">
          <h1>Welcome To Labtin</h1>
        </div>
        <div className="login_form">
          <div className="login_form_entry">
            <label htmlFor="UsersName">Name</label>
            <input
              type="text"
              name="UsersName"
              id="UsersName"
              placeholder="Ex - Shreyas Kumar"
              onChange={(e) => setUsersName(e.target.value)}
            />
          </div>
          <div className="login_form_entry">
            <label htmlFor="UserEmail">Email</label>
            <input
              type="email"
              name="UserEmail"
              id="UserEmail"
              placeholder="example@gmail.com"
              onChange={(e) => setUserEmail(e.target.value)}
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
            Sign Up
          </button>
          <div className="signUp_sec">
            <p>Already have a account? </p>
            <Link to="/"> Login</Link>
          </div>
        </div>
        <div className="header_logo loginfooter">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
