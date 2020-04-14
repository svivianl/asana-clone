import { ActionType, getType } from "typesafe-actions";
import { TaskActionsTypes } from "../../../../../../../../../../../../../../store/tasks/actions";
import * as TaskActions from "../../../../../../../../../../../../../../store/tasks/actions";
import {
  TaskState,
  MessageError,
  createTaskState,
} from "../../../../../../../../../../../../../../store/tasks/types";

export const taskReducer = (
  state: TaskState = createTaskState(),
  action: ActionType<typeof TaskActionsTypes | any>
): TaskState => {
  const { type, payload } = action;

  switch (type) {
    case getType(TaskActions.getTask):
    case getType(TaskActions.getTasks):
      return { ...state, isLoading: true };
    case getType(TaskActions.getTasksSuccess):
    case getType(TaskActions.getTaskSuccess):
      return { ...state, task: payload, isLoading: false, status: null };
    case getType(TaskActions.getTaskError):
    case getType(TaskActions.getTasksError):
      return {
        ...state,
        isLoading: false,
        status: {
          type: "error",
          error: payload as MessageError,
        },
      };
    case getType(TaskActions.getTaskCancel):
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
