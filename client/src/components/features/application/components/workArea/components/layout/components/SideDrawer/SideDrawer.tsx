import React from "react";
import { useSelector } from "react-redux";
import "../../../../../../../../../css/features/application/components/workArea/components/layout/components/SideDrawer/SideDrawer.css";
import * as store from "../../../../../../../../../store/projects/store";

const SideDrawer = ({ isSideDrawerOpen }: any) => {
  const projects = useSelector(store.projectsSelectors.getProjects);
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
        {projects && (
          <ul>
            {Object.keys(projects).map((key) => {
              const project = projects[key];
              return (
                <li key={project.id}>
                  <a href={`/list/${project.id}`} className="project">
                    {project.name}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
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
