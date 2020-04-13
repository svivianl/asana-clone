import { Task } from "../../../types";
import { TaskState } from "./taskState";

export function createTaskState(): TaskState {
  return {
    isLoading: false,
    task: {} as Task,
    status: null,
  };
}
