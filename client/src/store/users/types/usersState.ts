import { User } from "../../../types";

export type ErrorType = "load-users" | "load-user" | "save-user";

export interface MessageError {
  type: ErrorType;
  message: string;
}

export type StatusType = "saved" | "updated" | "error";

export interface Status {
  type: StatusType;
  error?: MessageError;
}

export interface UsersState {
  isLoading: boolean;
  users: User[];
  user: User;
  status: Status | null;
}
