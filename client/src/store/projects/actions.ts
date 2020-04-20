import { createAction } from "typesafe-actions";
import { Project } from "../../types";

export enum ProjectsActionsTypes {
  GetProjects = "projects/GetProjects",
  GetProjectsSuccess = "projects/GetProjectsSuccess",
  GetProjectsError = "projects/GetProjectsError",
  GetProjectsCancel = "projects/GetProjectsCancel",
}

export const getProjects = createAction(ProjectsActionsTypes.GetProjects)();

export const getProjectsSuccess = createAction(
  ProjectsActionsTypes.GetProjectsSuccess,
  (projects: Project[]) => projects
)();

export const getProjectsError = createAction(
  ProjectsActionsTypes.GetProjectsError,
  (error: Error) => ({ message: error.message, type: "get-projects" })
)();

export const getProjectsCancel = createAction(
  ProjectsActionsTypes.GetProjectsCancel
)();
