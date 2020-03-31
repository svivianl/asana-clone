import React from "react";
import "../../../../../../../../../css/components/features/application/components/workArea/components/layout/components/SideDrawer/SideDrawerButton.css";

const SideDrawerButton = ({ drawerToggleClickHandler }: any) => {
  return (
    <button className="toggle-button" onClick={drawerToggleClickHandler}>
      <i className="fas fa-bars" />
    </button>
  );
};

export default SideDrawerButton;
