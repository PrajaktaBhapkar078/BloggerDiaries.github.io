import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
 
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="heading">
          <h2>Read, Write and Expand Your World.</h2>
        </div>
        <div className="animation">
        <iframe src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
        </div>
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem"><Link to="?cat=Health">Health</Link></li>
          <li className="sidebarListItem"><Link to="?cat=Sports">Sports</Link></li>
          <li className="sidebarListItem"><Link to="?cat=Music">Music</Link></li>
          <li className="sidebarListItem"><Link to="?cat=Food">Food</Link></li>
          <li className="sidebarListItem"><Link to="?cat=Technology">Technology</Link></li>
          <li className="sidebarListItem"><Link to="?cat=Others">Others</Link></li>
          
        </ul>
      </div>
    </div>
  );
}
