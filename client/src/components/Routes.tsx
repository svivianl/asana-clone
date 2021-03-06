import React from "react";
// import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
// import { useHistory } from "react-router-dom";
// import Register from "./features/Register";
// import SignIn from "./features/SignIn";
import Main from "./features/Main";
import List from "./features/application/components/workArea/components/list/List";
// import * as store from "../store/users/store";

const Routes = () => {
  // const user = useSelector(store.userSelectors.getUser);
  // const history = useHistory();

  // const isLoggedOut = !user || !user.token;

  // if (history.location.pathname === "/" && isLoggedOut) {
  //   return <Redirect to="/signin" />;
  // }

  // if (history.location.pathname === "/signout" && isLoggedOut) {
  //   return <Redirect to="/signin" />;
  // }

  return (
    <Switch>
      <Route path="/list/:projectId" exact={true} component={List} />
      <Route path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
