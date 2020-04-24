import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Task from "../list/components/projects/components/tasks/components/task/Task";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import * as taskStore from "../list/components/projects/components/tasks/components/task/store/store";
import "../../../../../../../css/features/application/components/workArea/components/layout/layout.css";

const Layout: FunctionComponent = ({ children }) => {
  const dispatch = useDispatch();
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<Boolean>(false);

  const task = useSelector(taskStore.taskSelectors.getTask);

  useEffect(() => {
    if (!Object.keys(task).length && task.constructor === Object) {
      taskStore.getTasks(dispatch)();
    }
  }, []);

  const drawerToggleClickHandler = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setIsSideDrawerOpen(false);
  };

  return (
    <div style={{ height: "100vh" }}>
      <header>
        <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideDrawer isSideDrawerOpen={isSideDrawerOpen} />
        {isSideDrawerOpen && (
          <Backdrop backdropClickHandler={backdropClickHandler} />
        )}
      </header>
      <div style={{ marginTop: "64px" }} className="mr-3">
        {children}
      </div>
    </div>
  );
};

export default Layout;
