import { Dispatch } from "redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

export const getUsers = (dispatch: Dispatch<any>) => () => {
  dispatch(actions.getUsers());
};

export const userSelectors = { ...selectors };
