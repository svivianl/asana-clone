import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { UsersState } from "./users/types";
import { usersReducer } from "./users/reducer";
import { TaskState } from "./tasks/types";
import { taskReducer } from "../components/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/store/reducer";
import { ProjectsState } from "./projects/types";
import { projectsReducer } from "./projects/reducer";

export interface RootState {
  router: RouterState;
  usersState: UsersState;
  taskState: TaskState;
  projectsState: ProjectsState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    usersState: usersReducer,
    taskState: taskReducer,
    projectsState: projectsReducer,
  });
