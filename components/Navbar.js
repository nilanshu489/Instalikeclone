import React from "react";
import "./Navbar.css";

function Navbar({ onDM }) {
  return (
    <nav className="navbar">
     <span className="logo"><b>Postify <small>(instalikeclone)</small></b></span>
      <span className="nav-icons">
        <i className="bi bi-chat-dots" onClick={onDM} title="Direct Messages"></i>
      </span>
    </nav>
  );
}
export default Navbar;
