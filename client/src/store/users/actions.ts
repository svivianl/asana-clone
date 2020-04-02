import { createAction } from "typesafe-actions";
import { User } from "../../types";

export enum UsersActionsTypes {
  // GetUser = "users/GetUser",
  // GetUserSuccess = "users/GetUserSuccess",
  // GetUserError = "users/GetUserError",
  GetUsers = "users/GetUsers",
  GetUsersSuccess = "users/GetUsersSuccess",
  GetUsersError = "users/GetUsersError",
  GetUsersCancel = "users/GetUsersCancel"
}

// export const getUser = createAction(UsersActionsTypes.GetUser)<
//   undefined
// >();

// export const getUserSuccess = createAction(
//   UsersActionsTypes.GetUserSuccess,
//   action => (user: User) => action(user)
// )();

// export const getUserError = createAction(
//   UsersActionsTypes.GetUserError,
//   action => (error: Error) =>
//     action({ message: error.message, type: "get-GetUser" })
// )>();

export const getUsers = createAction(UsersActionsTypes.GetUsers)<undefined>();

export const getUsersSuccess = createAction(
  UsersActionsTypes.GetUsersSuccess,
  (users: User[]) => users
)();

export const getUsersError = createAction(
  UsersActionsTypes.GetUsersError,
  (error: Error) => ({ message: error.message, type: "get-users" })
)();

export const getUsersCancel = createAction(UsersActionsTypes.GetUsersCancel)();
