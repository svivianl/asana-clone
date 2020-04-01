import { createAction as createStandardAction } from "typesafe-actions";
import { Assignee } from "../../../../../../../../../../../../../../../../types";

export enum TaskDetailsActionsTypes {
  Assignee = "taskDetails/Assignee",
  AssigneeSuccess = "taskDetails/AssigneeSuccess",
  AssigneeError = "taskDetails/AssigneeError",
  Assignees = "taskDetails/Assignees",
  AssigneesSuccess = "taskDetails/AssigneesSuccess",
  AssigneesError = "taskDetails/AssigneesError"
}

export const getAssignee = createStandardAction(
  TaskDetailsActionsTypes.Assignee
)<undefined>();

interface AssigneeAction {
  (assignee: Assignee): any;
}
export const getAssigneeSuccess = createStandardAction(
  TaskDetailsActionsTypes.AssigneeSuccess,
  action => (assignee: Assignee) => action(assignee)
)<AssigneeAction, undefined>();

interface MessageError {
  (error: Error): any;
}
export const getAssigneeError = createStandardAction(
  TaskDetailsActionsTypes.AssigneeError,
  action => (error: Error) =>
    action({ message: error.message, type: "get-assignee" })
)<MessageError, undefined>();

export const getAssignees = createStandardAction(
  TaskDetailsActionsTypes.Assignees
)<undefined>();

interface AssigneesAction {
  (assignees: Assignee[]): any;
}
export const getAssigneesSuccess = createStandardAction(
  TaskDetailsActionsTypes.AssigneesSuccess,
  action => (assignees: Assignee[]) => action(assignees)
)<AssigneesAction, undefined>();

export const getAssigneesError = createStandardAction(
  TaskDetailsActionsTypes.AssigneesError,
  action => (error: Error) =>
    action({ message: error.message, type: "get-assignees" })
)<MessageError, undefined>();
