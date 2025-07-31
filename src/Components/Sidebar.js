import React from "react";
import { FiLogOut } from "react-icons/fi"; 

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <h1 className="logo">Logo</h1>
      <ul className="nav-list">
        <li className="nav-item active">Dashboard</li>
        <li className="nav-item">Status</li>
        <li className="nav-item">Reports</li>
        <li className="nav-item">Notification</li>
      </ul>
    </div>
    <div className="logout-container">
      <a href="#" className="logout">       
        Logout
        <FiLogOut style={{ marginLeft: "8px" }} />
      </a>
    </div>
  </div>
);

export default Sidebar;
