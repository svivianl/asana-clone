import { Dispatch } from "redux";
import * as actions from "../../../../../../../../../../../../../../store/tasks/actions";
import * as selectors from "./selectors";
import { Task } from "../../../../../../../../../../../../../../types";

export const getTask = (dispatch: Dispatch<any>) => (taskId: string) => {
  dispatch(actions.getTask(taskId));
};

export const getTasks = (dispatch: Dispatch<any>) => () => {
  dispatch(actions.getTasks());
};

export const putTask = (dispatch: Dispatch<any>) => (taskBody: Task) => {
  dispatch(actions.putTask(taskBody));
};

export const taskSelectors = { ...selectors };
