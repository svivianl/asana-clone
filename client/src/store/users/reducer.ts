import { ActionType, getType } from "typesafe-actions";
import { UsersActionsTypes } from "./actions";
import * as UsersActions from "./actions";
import { UsersState, MessageError, createUsersState } from "./types";

export const usersReducer = (
  state: UsersState = createUsersState(),
  action: ActionType<typeof UsersActionsTypes | any>
): UsersState => {
  const { type, payload } = action;
  switch (type) {
    // case getType(UsersActions.getUser):
    case getType(UsersActions.getUsers):
      return { ...state, isLoading: true };
    // case getType(UsersActions.getUserSuccess):
    // return { ...state, user: payload, isLoading: false, status: null };
    case getType(UsersActions.getUsersSuccess):
      console.log("payload: ", payload);
      const { users } = payload;
      console.log("reducer users: ", users);
      return { ...state, users: payload, isLoading: false, status: null };
    // case getType(UsersActions.getUserError):
    case getType(UsersActions.getUsersError):
      return {
        ...state,
        isLoading: false,
        status: {
          type: "error",
          error: payload as MessageError
        }
      };
    case getType(UsersActions.getUsersCancel):
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
