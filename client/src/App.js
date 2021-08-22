import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import BarChart from "./pages/chart/Chart";
import Help from "./pages/help/help";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "firebase/analytics";
import "firebase/auth";
import Admin from './pages/admin/admin'
function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <BrowserRouter>
      {(()=>{
          if(click==true){
            return <Help/>
          }
        })()}
        <div  style={{width:"80px",backgroundColor:"#1e3932",position:"sticky",top:"0px",zIndex:"1001"}}class="chat"  onClick={handleClick}>
     <i  style={{ fontSize:"50px",position:"sticky",top:"0px",color:"white",zIndex:"1000"}} id="mm" className={click ? "fas fa-times":"fa fa-robot" } aria-hidden="true" ></i>
      </div>

    <Router>
      <Switch>
        <Route exact path="/">
        <div><Login /></div>
        </Route>
        <Route path="/register">{<div><Register /></div>}</Route>
        <Route path="/login">{<div><Login /></div>}</Route>
        <Route path="/home">{<div><TopBar /><Home /></div>}</Route>
        <Route path="/write">{<div><TopBar /><Write /></div> }</Route>
        <Route path="/settings">{<div><TopBar /><Settings /></div>}</Route>
        <Route path="/about"><div><TopBar /><About/></div></Route>
        <Route path="/contact"><div><TopBar /><Contact/></div></Route>
        <Route path="/stats"><div><TopBar /><BarChart/></div></Route>
        <Route path="/admin">{<div><Admin /></div>}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        
      </Switch>
    </Router>
    </BrowserRouter>

  );

}

export default App;
