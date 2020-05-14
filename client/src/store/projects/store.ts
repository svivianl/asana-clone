import { Dispatch } from "redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

export const getProjects = (dispatch: Dispatch<any>) => () => {
  dispatch(actions.getProjects());
};

export const getProjectTasks = (dispatch: Dispatch<any>) => (id: string) => {
  dispatch(actions.getProjectTasks(id));
};

export const projectsSelectors = { ...selectors };
