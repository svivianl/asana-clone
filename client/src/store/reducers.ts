import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { UsersState } from "./users/types";
import { usersReducer } from "./users/reducer";

export interface RootState {
  router: RouterState;
  usersState: UsersState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    users: usersReducer
  });
