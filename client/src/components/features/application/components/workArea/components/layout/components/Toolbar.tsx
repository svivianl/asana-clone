import React from "react";
import "../../../../../../../../css/features/application/components/workArea/components/layout/components/Toolbar.css";
import "./SideDrawer/SideDrawerButton";
import SideDrawerButton from "./SideDrawer/SideDrawerButton";

const Toolbar = ({ drawerToggleClickHandler }: any) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="toolbar-toogle-button">
        <SideDrawerButton drawerToggleClickHandler={drawerToggleClickHandler} />
      </div>
      <a className="navbar-brand" href="#">
        LOGO
      </a>
      <div className="container">
        <div className="row">
          <div className="col-sm">One of three columns</div>
        </div>
        <div className="row">
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;

{
  /* <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <SideDrawerButton
            drawerToggleClickHandler={drawerToggleClickHandler}
          />
        </div>
        <div className="toolbar-logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar-navigation-items">
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </header> */
}
