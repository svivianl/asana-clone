import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { TaskDetailsState } from "../components/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/components/TaskDetails/types";
import { taskDetailsReducer } from "../components/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/components/TaskDetails/store/taskDetails.reducer";

export interface RootState {
  router: RouterState;
  taskDetailsState: TaskDetailsState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    taskDetails: taskDetailsReducer
  });
