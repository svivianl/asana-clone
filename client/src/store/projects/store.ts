import { Dispatch } from "redux";
import * as actions from "./actions";

export const getProjects = (dispatch: Dispatch<any>) => {
  dispatch(actions.getProjects());
};
