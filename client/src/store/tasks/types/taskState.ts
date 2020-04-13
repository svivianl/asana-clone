import { Task } from "../../../types";

export type ErrorType = "load-task" | "save-task";

export interface MessageError {
  type: ErrorType;
  message: string;
}

export type StatusType = "saved" | "updated" | "error";

export interface Status {
  type: StatusType;
  error?: MessageError;
}

export interface TaskState {
  isLoading: boolean;
  task: Task;
  status: Status | null;
}
