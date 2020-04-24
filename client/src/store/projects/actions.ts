import { createAction } from "typesafe-actions";
import { Project } from "../../types";

export enum ProjectsActionsTypes {
  GetProjects = "projects/GetProjects",
  GetProjectsSuccess = "projects/GetProjectsSuccess",
  GetProjectsError = "projects/GetProjectsError",
  GetProjectsCancel = "projects/GetProjectsCancel",
  GetProjectTasks = "Project/GetProjectTasks",
  GetProjectTasksSuccess = "Project/GetProjectTasksSuccess",
  GetProjectTasksError = "Project/GetProjectTasksError",
  GetProjectTasksCancel = "Project/GetProjectTasksCancel",
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

export const getProjectTasks = createAction(
  ProjectsActionsTypes.GetProjectTasks,
  (projectId: string) => projectId
)();

export const getProjectTasksSuccess = createAction(
  ProjectsActionsTypes.GetProjectTasksSuccess,
  (project: Project) => project
)();

export const getProjectTasksError = createAction(
  ProjectsActionsTypes.GetProjectTasksError,
  (error: Error) => ({ message: error.message, type: "load-tasks" })
)();

export const getProjectTasksCancel = createAction(
  ProjectsActionsTypes.GetProjectTasksCancel
)();
