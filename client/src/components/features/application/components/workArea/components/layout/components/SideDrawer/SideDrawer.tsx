import React from "react";
// import SideDrawerButton from "./SideDrawerButton";
import "../../../../../../../../../css/features/application/components/workArea/components/layout/components/SideDrawer/SideDrawer.css";

const SideDrawer = ({ isSideDrawerOpen }: any) => {
  return (
    <nav className={isSideDrawerOpen ? "sidedrawer open" : "sidedrawer"}>
      <ul>
        <li>
          <img src="./Logo_V2.png" alt="Asana Clone Logo" className="logo" />
        </li>
        <li>
          <a href="/" className="main-actions">
            <i className="fas fa-home"></i>
            Home
          </a>
        </li>
        <li>
          <a href="/" className="main-actions">
            <i className="far fa-check-circle"></i>
            My Tasks
          </a>
        </li>
        <li>
          <a href="/" className="main-actions">
            <i className="far fa-bell"></i>
            Inbox
          </a>
        </li>
      </ul>
      <div className="favorites">
        <h6>Favorites</h6>
        <ul>
          <li>
            <a href="#" className="project">
              My project
            </a>
          </li>
          <li>
            <a href="#" className="project">
              My other project
            </a>
          </li>
          <li>
            <a href="#" className="project">
              My abandoned project
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button>
          <i className="fas fa-plus"></i>
          Create a Project
        </button>
      </div>
    </nav>
  );
};

export default SideDrawer;
