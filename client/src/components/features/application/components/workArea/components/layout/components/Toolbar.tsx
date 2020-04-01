import React from "react";
import "../../../../../../../../css/components/features/application/components/workArea/components/layout/components/Toolbar.css";
import "./SideDrawer/SideDrawerButton";
import SideDrawerButton from "./SideDrawer/SideDrawerButton";

const Toolbar = ({ drawerToggleClickHandler }: any) => {
  return (
    <header className="toolbar">
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
    </header>
  );
};

export default Toolbar;
