import React from "react"
import "./register.css"
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import firebaseConfig from "../initFirebase";
var user;
export default class Register extends React.Component{
  constructor(){
    super();
    this.state = {
      username : "",
      email : "",
      password : "",
      cnf_password : "",
      notMatched : false,
      redirect:null
          }
  
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeCnfPassword = this.changeCnfPassword.bind(this);
    this.matchPassword = this.matchPassword.bind(this);
  }
  changeUsername(e){
    this.setState({username : e.target.value});
  }
  changeEmail(e){
    this.setState({email : e.target.value});
  }
  changePassword(e){
    this.setState({password : e.target.value});
  }
  changeCnfPassword(e){
    this.setState({cnf_password : e.target.value});
  }
  matchPassword(e){
    e.preventDefault()
    
    if(this.state.password === this.state.cnf_password){
      
        var email1=this.state.email
        var password1=this.state.password
        var username1=this.state.username
            firebaseConfig.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(function(){
              
              swal({
                title:"Successfully Registered!",
                text:" ",
                icon:"success",
                buttons:false,
                timer:2000
              });
          
              document.getElementById("form").reset();
              
              firebaseConfig.auth().signInWithEmailAndPassword(email1,password1)
            .then(function(){
              
              console.log("In register signin")
              user = firebaseConfig.auth().currentUser;
              user.updateProfile({displayName:username1}).then(function(){console.log("Display name updated")}).catch((error)=>{console.log(error)})
              
              console.log("In Loginnn",user.displayName)
              firebaseConfig.auth().signOut();
              window.location.href="/login";
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

            })
            
            .catch(function(error) {
              swal({
                title:error,
                icon:"error",
                buttons:false,
                timer:2000
              });
            document.getElementById("password").focus()
          
        });
    }
    else {
      this.setState({notMatched : true});
      document.getElementById("cpassword").focus()
    }
  }
  
  render()
  {
    return (
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" id="form" onSubmit={this.matchPassword}>
        <label>Username</label>
        <input autoFocus className="registerInput" id="username" type="text" placeholder="Enter the username..." onChange={this.changeUsername} required/>
        <label>Email</label>
        <input className="registerInput" type="email" placeholder="Enter the email..." onChange={this.changeEmail} required/>
        <label>Password</label>
        <input className="registerInput" id="password" type="password" placeholder="Enter the password..." onChange={this.changePassword} pattern=".{6,}" title="Must contain at least 6 or more characters" required/>
        <label>Confirm Password</label>
        <input autoFocus className="registerInput" id="cpassword" type="password" placeholder="Confirm you password..." onChange={this.changeCnfPassword} required/>
        <input type="submit" value="Register" className="registerButton"/>
      </form>
      
      {this.state.notMatched && <span id="span" style={{color:"red", marginTop:"10px"}}>Passwords do not match!!</span>}
      <button className="registerLoginButton">
        <Link className="link" to="/">
          Login
        </Link>
      </button>
    </div>
  )
  }
}

