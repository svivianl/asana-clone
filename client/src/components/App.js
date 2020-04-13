import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/features/application/components/workArea/components/layout/Layout";
import * as store from "./store/users/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    store.getUsers(dispatch)();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
