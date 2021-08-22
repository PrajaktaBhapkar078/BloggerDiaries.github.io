import { AuthContext } from "../auth";
import React,{ useContext } from "react";
import { Link } from "react-router-dom"; 
import { Redirect } from "react-router-dom";
import { Context } from "../../context/Context";
import Home from "../home/Home";
import "./login.css";

import swal from 'sweetalert';
import firebaseConfig from "../initFirebase";
import { useHistory } from "react-router-dom";
export var user=null;
export default function Login() {
  const history = useHistory();
   const handleSubmit = (e) => {
     
    e.preventDefault();
    const { email, password } = e.target.elements;
    firebaseConfig.auth().signInWithEmailAndPassword(email.value,password.value)
            .then(function(){
              user = firebaseConfig.auth().currentUser;
              console.log("Current user is: ",user.displayName)
              swal({
                title:"Logged In Successfully !",
                text:user.displayName,
                icon:"success",
                buttons:false,
                timer:2000
              });
              
              history.push("/home");
            })
          
            .catch(function(error) {
          var errorMessage = error.message;
            swal({
              title:"Error!",
              text:errorMessage,
              buttons:false,
              timer:2000,
              icon:"error"
            }); 
            });
          };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" 
        onSubmit={handleSubmit}>
       <label for="email">Email</label>
        <input className="loginInput" type="email" name="email" placeholder="Email" />

        <label for="password">Password</label>
        <input className="loginInput"  type="password" name="password" placeholder="Password" />
        <button className="loginButton" type="submit" >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      <button className="loginAdminButton">
        <Link className="link" to="/admin">
         AdminLogin
        </Link>
      </button>
    </div>

  );
}


