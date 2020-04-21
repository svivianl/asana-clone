import { ActionType, getType } from "typesafe-actions";
import { ProjectsState, createProjectsState, MessageError } from "./types";
import { ProjectsActionsTypes } from "./actions";
import * as ProjectsActions from "./actions";

export const projectsReducer = (
  state: ProjectsState = createProjectsState(),
  action: ActionType<typeof ProjectsActionsTypes | any>
) => {
  const { type, payload } = action;
  switch (type) {
    case getType(ProjectsActions.getProjects):
      return { ...state, isLoading: true };
    case getType(ProjectsActions.getProjectsSuccess):
      return {
        ...state,
        projects: payload,
        isLoading: false,
        status: null,
      };
    case getType(ProjectsActions.getProjectsError):
      return {
        ...state,
        isLoading: false,
        status: {
          type: "error",
          error: payload as MessageError,
        },
      };
    case getType(ProjectsActions.getProjectsCancel):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
