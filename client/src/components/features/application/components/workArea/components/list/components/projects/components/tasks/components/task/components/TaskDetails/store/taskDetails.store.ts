import { Dispatch } from "redux";
import * as actions from "./taskDetails.actions";

export const getAssignees = (dispatch: Dispatch<any>) => () => {
  dispatch(actions.getAssignee());
};
