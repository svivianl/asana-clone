import { Dispatch } from "redux";
import * as actions from "./actions";

export const getUsers = (dispatch: Dispatch<any>) => () => {
  dispatch(actions.getUsers());
};
