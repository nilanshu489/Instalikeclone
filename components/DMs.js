import React from "react";
import "./DMs.css";

function DMs({ onClose }) {
  return (
    <div className="dm-popup">
      <div className="dm-header">
        <span>Direct Messages</span>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="dm-content"> 
        <p style={{margin:"18px 0"}}>Demo: Build full DM system for backend projects! ✉️</p>
        <ul>
          <li><b>alice</b>: "Hey!"</li>
          <li><b>bob</b>: "Let's connect your project."</li>
        </ul>
      </div>
    </div>
  );
}
export default DMs;
