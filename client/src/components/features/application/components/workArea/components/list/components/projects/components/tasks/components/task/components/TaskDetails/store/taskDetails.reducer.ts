import { ActionType, getType } from "typesafe-actions";
import { TaskDetailsActionsTypes } from "./taskDetails.actions";
import * as TaskDetailsActions from "./taskDetails.actions";
import { Assignee } from "../../../../../../../../../../../../../../../../types";

type StatusType = "saved" | "updated" | "error";

type MessageErrorType = "load-assignee" | "load-assignees";

interface MessageError {
  type: MessageErrorType;
  message: string;
}

interface StatusMessageType {
  type: StatusType;
  error?: MessageError;
}

interface TaskDetailsState {
  isLoading: boolean;
  assignee: Assignee;
  assignees: Assignee[];
  status: null | StatusMessageType;
}

const createtaskDetailsState = () => {
  return {
    isLoading: false,
    assignee: {} as Assignee,
    assignees: [],
    status: null
  };
};

export const taskDetailsReducer = (
  state: TaskDetailsState = createtaskDetailsState(),
  action: ActionType<typeof TaskDetailsActionsTypes>
): TaskDetailsState => {
  const { type, payload } = action;
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
