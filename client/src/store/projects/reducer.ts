import { ActionType, getType } from "typesafe-actions";
import { cloneDeep } from "lodash";
import { ProjectsState, createProjectsState, MessageError } from "./types";
import { ProjectsActionsTypes } from "./actions";
import * as ProjectsActions from "./actions";
import { Project, Projects } from "../../types";

export const projectsReducer = (
  state: ProjectsState = createProjectsState(),
  action: ActionType<typeof ProjectsActionsTypes | any>
) => {
  const { type, payload } = action;
  switch (type) {
    case getType(ProjectsActions.getProjects):
    case getType(ProjectsActions.getProjectTasks):
      return { ...state, isLoading: true, status: null };
    case getType(ProjectsActions.getProjectsSuccess):
      const projects: Projects = {};
      action.payload.forEach((project: Project) => {
        projects[project.id] = project;
      });
      return {
        ...state,
        projects,
        isLoading: false,
        status: null,
      };
    // case getType(ProjectsActions.getProjectTasksSuccess):
    //   const { id, tasks} = action.payload;
    //   const project: Project = { ...state[id] };
    //   return { ...state, [id]: { ...project, addCoApplicant: true } };
    //   return {
    //     ...state,
    //     projects: payload,
    //     isLoading: false,
    //     status: null,
    //   };
    case getType(ProjectsActions.getProjectsError):
    case getType(ProjectsActions.getProjectTasksError):
      return {
        ...state,
        isLoading: false,
        status: {
          type: "error",
          error: payload as MessageError,
        },
      };
    case getType(ProjectsActions.getProjectsCancel):
    case getType(ProjectsActions.getProjectTasksCancel):
      return {
        ...state,
        isLoading: false,
        status: null,
      };
    default:
      return state;
  }
};
