import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../../../../../css/components/features/application/components/workArea/components/layout/layout.css";
import TaskView from "../list/components/projects/components/tasks/components/task/TaskView";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import * as taskStore from "../list/components/projects/components/tasks/components/task/store/store";

const Layout = () => {
  const dispatch = useDispatch();
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<Boolean>(false);

  const task = useSelector(taskStore.userSelectors.getTask);

  useEffect(() => {
    if (Object.keys(task).length === 0 && task.constructor === Object) {
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
      <SideDrawer isSideDrawerOpen={isSideDrawerOpen} />}
      {isSideDrawerOpen && (
        <Backdrop backdropClickHandler={backdropClickHandler} />
      )}
      <main style={{ marginTop: "64px" }}>
        {/* <p>This is the page content!</p> */}
        <TaskView task={task} />
      </main>
    </div>
  );
};

export default Layout;
