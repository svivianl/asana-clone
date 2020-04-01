import { createAction as createStandardAction } from "typesafe-actions";
import { User } from "../../../../../../../../../../../../../../../../types";

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
  (assignee: User): any;
}

export const getAssigneeSuccess = createStandardAction(
  TaskDetailsActionsTypes.AssigneeSuccess,
  action => (assignee: User) => action(assignee)
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
  TaskDetailsActionsTypes.Assignees,
  action => () => action()
)<any, undefined>();

interface AssigneesAction {
  (assignees: User[]): any;
}
export const getAssigneesSuccess = createStandardAction(
  TaskDetailsActionsTypes.AssigneesSuccess,
  action => (assignees: User[]) => action(assignees)
)<AssigneesAction, undefined>();

export const getAssigneesError = createStandardAction(
  TaskDetailsActionsTypes.AssigneesError,
  action => (error: Error) =>
    action({ message: error.message, type: "get-assignees" })
)<MessageError, undefined>();
