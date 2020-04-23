import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import * as taskStore from "../list/components/projects/components/tasks/components/task/store/store";
import "../../../../../../../css/features/application/components/workArea/components/layout/layout.css";

const Layout = () => {
  const dispatch = useDispatch();
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<Boolean>(false);

  const task = useSelector(taskStore.userSelectors.getTask);

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
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer isSideDrawerOpen={isSideDrawerOpen} />
      {isSideDrawerOpen && (
        <Backdrop backdropClickHandler={backdropClickHandler} />
      )}
    </div>
  );
};

export default Layout;
