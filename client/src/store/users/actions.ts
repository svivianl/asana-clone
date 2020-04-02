import { createAction as createStandardAction } from "typesafe-actions";
import { User } from "../../types";

export enum UsersActionsTypes {
  GetUser = "users/GetUser",
  GetUserSuccess = "users/GetUserSuccess",
  GetUserError = "users/GetUserError",
  GetUsers = "users/GetUsers",
  GetUsersSuccess = "users/GetUsersSuccess",
  GetUsersError = "users/GetUsersError"
}

export const getUser = createStandardAction(UsersActionsTypes.GetUser)<
  undefined
>();

interface GetUserAction {
  (GetUser: User): any;
}

export const getUserSuccess = createStandardAction(
  UsersActionsTypes.GetUserSuccess,
  action => (GetUser: User) => action(GetUser)
)<GetUserAction, undefined>();

interface MessageError {
  (error: Error): any;
}
export const getUserError = createStandardAction(
  UsersActionsTypes.GetUserError,
  action => (error: Error) =>
    action({ message: error.message, type: "get-GetUser" })
)<MessageError, undefined>();

export const getUsers = createStandardAction(
  UsersActionsTypes.GetUsers,
  action => () => action()
)<any, undefined>();

interface GetUsersAction {
  (GetUsers: User[]): any;
}
export const getUsersSuccess = createStandardAction(
  UsersActionsTypes.GetUsersSuccess,
  action => (GetUsers: User[]) => action(GetUsers)
)<GetUsersAction, undefined>();

export const getUsersError = createStandardAction(
  UsersActionsTypes.GetUsersError,
  action => (error: Error) =>
    action({ message: error.message, type: "get-GetUsers" })
)<MessageError, undefined>();
