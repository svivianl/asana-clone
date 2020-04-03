import { createSelector, Selector } from "reselect";
import { User } from "../../types";
import { RootState } from "../reducers";
import { UsersState } from "./types";

export const getUsersState = (state: RootState) => state.usersState;

export const getUsers: Selector<RootState, User[]> = createSelector(
  getUsersState,
  (state: UsersState) => state?.users || []
);

export const getIsLoading: Selector<RootState, boolean> = createSelector(
  getUsersState,
  (state: UsersState) => state?.isLoading || false
);
