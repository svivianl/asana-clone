import { User } from "../../../types";
import { UsersState } from "./usersState";

export function createUsersState(): UsersState {
  return {
    isLoading: false,
    users: [],
    user: {} as User,
    status: null
  };
}
