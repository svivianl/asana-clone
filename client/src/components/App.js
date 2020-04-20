import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./features/application/components/workArea/components/layout/Layout";
import * as usersStore from "../store/users/store";
import * as projectsStore from "../store/projects/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    usersStore.getUsers(dispatch)();
    projectsStore.getProjects(dispatch)();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
