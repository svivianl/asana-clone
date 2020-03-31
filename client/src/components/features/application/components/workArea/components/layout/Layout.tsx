import React, { useState } from "react";
import "../../../../../../../css/components/features/application/components/workArea/components/layout/layout.css";
import Task from "../list/components/projects/components/tasks/components/task/Task";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

const Layout = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<Boolean>(false);

  const task = {
    id: "bb1347ee-3170-4e80-9b06-f0a691ca59e8",
    status: "61bc95e9-a861-4c15-b4a7-d88e2f7594f3",
    assignee: "6afc9c9b-afdf-4b8f-b4cf-5dc370ac26ad",
    dueDate: new Date("2021-02-15T06:45:05.076Z"),
    creationDate: new Date("2020-03-25T13:58:46.655Z"),
    title: "ea aut doloribus",
    description:
      "Iusto dolor dolore vel tempora aut nihil et. Sequi dolorem doloribus quidem culpa explicabo. Asperiores nesciunt eveniet ut vitae et sint natus. Reiciendis sunt qui quae.",
    project: "0cab7ecc-9409-4ebf-8b18-72b523abe9de"
  };

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
        <p>This is the page content!</p>
      </main>
    </div>
  );
};

export default Layout;
