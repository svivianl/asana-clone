import { ActionType, getType } from "typesafe-actions";
import { TaskDetailsActionsTypes } from "./taskDetails.actions";
import * as TaskDetailsActions from "./taskDetails.actions";
import {
  TaskDetailsState,
  MessageError,
  createtaskDetailsState
} from "../types";

export const taskDetailsReducer = (
  state: TaskDetailsState = createtaskDetailsState(),
  action: ActionType<typeof TaskDetailsActionsTypes | any>
): TaskDetailsState => {
  const { type, payload } = action;
  console.log("action", action);
  switch (type) {
    case getType(TaskDetailsActions.getAssignee):
      return { ...state, isLoading: true };
    case getType(TaskDetailsActions.getAssigneeSuccess):
      return { ...state, assignee: payload, isLoading: false, status: null };
    case getType(TaskDetailsActions.getAssignees):
      return { ...state, isLoading: true };
    case getType(TaskDetailsActions.getAssigneesSuccess):
      return { ...state, assignees: payload, isLoading: false, status: null };
    case getType(TaskDetailsActions.getAssigneeError):
    case getType(TaskDetailsActions.getAssigneesError):
      return {
        ...state,
        isLoading: false,
        status: {
          type: "error",
          error: payload as MessageError
        }
      };
    default:
      return state;
  }
};
