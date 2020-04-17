import { createAction } from "typesafe-actions";
import { Task } from "../../types";

export enum TaskActionsTypes {
  GetTask = "Task/GetTask",
  GetTaskSuccess = "Task/GetTaskSuccess",
  GetTaskError = "Task/GetTaskError",
  GetTaskCancel = "Task/GetTaskCancel",
  GetTasks = "Task/GetTasks",
  GetTasksSuccess = "Task/GetTasksSuccess",
  GetTasksError = "Task/GetTasksError",
  GetTasksCancel = "Task/GetTasksCancel",
  PutTask = "Task/PutTask",
  PutTaskSuccess = "Task/PutTaskSuccess",
  PutTaskError = "Task/PutTaskError",
  PutTaskCancel = "Task/PutTaskCancel",
}

export const getTask = createAction(
  TaskActionsTypes.GetTask,
  (taskId: string) => taskId
)();

export const getTaskSuccess = createAction(
  TaskActionsTypes.GetTaskSuccess,
  (task: Task) => task
)();

export const getTaskError = createAction(
  TaskActionsTypes.GetTaskError,
  (error: Error) => ({ message: error.message, type: "load-task" })
)();

export const getTaskCancel = createAction(TaskActionsTypes.GetTaskCancel)();

export const getTasks = createAction(TaskActionsTypes.GetTasks)();

export const getTasksSuccess = createAction(
  TaskActionsTypes.GetTasksSuccess,
  (tasks: Task) => tasks
)();

export const getTasksError = createAction(
  TaskActionsTypes.GetTasksError,
  (error: Error) => ({ message: error.message, type: "load-tasks" })
)();

export const getTasksCancel = createAction(TaskActionsTypes.GetTasksCancel)();

export const putTask = createAction(
  TaskActionsTypes.PutTask,
  (taskBody: Task) => taskBody
)();

export const putTaskSuccess = createAction(
  TaskActionsTypes.PutTaskSuccess,
  (task: Task) => task
)();

export const putTaskError = createAction(
  TaskActionsTypes.PutTaskError,
  (error: Error) => ({ message: error.message, type: "load-task" })
)();

export const putTaskCancel = createAction(TaskActionsTypes.PutTaskCancel)();
