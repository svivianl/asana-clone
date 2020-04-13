import { combineEpics } from "redux-observable";
import usersEpics from "./users/epics";
import tasksEpics from "./tasks/epics";

export default combineEpics<any>(...usersEpics, ...tasksEpics);
