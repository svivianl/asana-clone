import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./features/application/components/workArea/components/layout/Layout";
import Routes from "./Routes";
import * as usersStore from "../store/users/store";
import * as projectsStore from "../store/projects/store";

const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    usersStore.getUsers(dispatch)();
    projectsStore.getProjects(dispatch)();
  }, []);

  return (
    <div className="App">
      <Layout>
        <main className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
          <Router history={history}>
            <Routes />
          </Router>
        </main>
      </Layout>
    </div>
  );
}

export default App;
