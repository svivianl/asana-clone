import { combineEpics } from "redux-observable";
import taskDetailsEpics from "../components/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/components/TaskDetails/store/taskDetails.epics";

export default combineEpics<any>(...taskDetailsEpics);
