import React from "react";
import "../../../../../../../../css/features/application/components/workArea/components/layout/components/Toolbar.css";
import "./SideDrawer/SideDrawerButton";
import SideDrawerButton from "./SideDrawer/SideDrawerButton";

const Toolbar = ({ drawerToggleClickHandler }: any) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="toolbar-toogle-button">
        <SideDrawerButton drawerToggleClickHandler={drawerToggleClickHandler} />
      </div>
      <a className="navbar-brand" href="/">
        LOGO
      </a>
      <div className="container-fluid ">
        <div className="container-fluid row">
          <div className="col">
            <div className="row ml-0">
              <h5>PROJECT TITLE</h5>
              <span>
                <i className="fas fa-chevron-down ml-3"></i>
              </span>
              <span>
                <i className="fas fa-info-circle ml-3"></i>
              </span>
            </div>
            <div className="row">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    List
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Board
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Calendar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Progress
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Forms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    More...
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <i className="far fa-user-circle fa-2x"></i>
            <i className="far fa-user-circle fa-2x mr-3"></i>
            <button type="button" className="btn btn-outline-light mr-5">
              <i className="fas fa-user-friends mr-1"></i>
              Share
            </button>
            <i className="fas fa-plus-circle fa-2x mr-1"></i>
            <i className="far fa-question-circle fa-2x mr-1"></i>
            <i className="far fa-user-circle fa-2x mr-1"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
