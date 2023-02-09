import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [navState, setNavState] = useState(false);
  return (
    <nav className={`${navState ? "open" : ""}`}>
      <div className="container nav">
        <div className="nav_brand">
          <h3>Tech summit 🚀</h3>
        </div>

        <div
          className={`nav_switch ${navState ? "open" : ""}`}
          onClick={() => setNavState(!navState)}
        >
          <span className="span1"></span>
          <span className="span2"></span>
          <span className="span3"></span>
        </div>
        <div className="nav_link_container">
          <ul className="nav_link">
            <li>Courses</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="nav_links_collapsed">
        <a href="#"><h2>Home</h2></a>
        <a href="#"><h2>Courses</h2></a>
        <a href="#"><h2>About</h2></a>
        <a href="#"><h2>Contact</h2></a>
      </div>
    </nav>
  );
}

export default Navbar;
