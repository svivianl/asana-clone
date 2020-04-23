import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // Redirect,
  // Route,
  RouteComponentProps,
  // Switch,
  // withRouter,
} from "react-router";
// import Task from "./components/projects/components/tasks/components/task/Task";
// import * as store from "../../../store/users/store";

interface MatchParams {
  projectId: string;
}
type BaseProps = RouteComponentProps<MatchParams>;

const List = ({
  match: {
    params: { projectId },
  },
}: BaseProps) => {
  return (
    <Fragment>
      <main style={{ marginTop: "64px" }} className="mr-3">
        <h1>Project {projectId}</h1>
        {/* <p>This is the page content!</p> */}
        {/* <Task task={task} /> */}
      </main>
    </Fragment>
  );
};

export default List;
