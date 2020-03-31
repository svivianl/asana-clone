import React from "react";
import SideDrawerButton from "./SideDrawerButton";
import "../../../../../../../../../css/components/features/application/components/workArea/components/layout/components/SideDrawer/SideDrawer.css";

const SideDrawer = ({ isSideDrawerOpen }: any) => {
  return (
    <nav className={isSideDrawerOpen ? "sidedrawer open" : "sidedrawer"}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
