
import { Link , useHistory } from "react-router-dom";

import "./topbar.css";
import firebaseConfig from "../../pages/initFirebase";
export default function TopBar() {
  const history = useHistory();
  
  const user=firebaseConfig.auth().currentUser;

  const handleLogout=()=>{
    
    firebaseConfig.auth().signOut();
    history.push("/");
}
  return (
    <div className="top">
    <div className="topLeft">
    <ul className="topList">
    <li className="topListItem">
          <Link className="link" to="/help">
            
          </Link>
        </li>
        </ul>
    </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <a className="feedbackLink" href="https://forms.gle/ZHC31AN9dQLJ6X5NA" target="_blank">FEEDBACK</a>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/stats">
              STATS
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            LOGOUT
          </li>
        </ul>
      </div>
      <div className="topRight">
        
          {/* <div className="username">
            Hi {user.displayName}!
          </div> */}
      </div>
    </div>
  );
}
