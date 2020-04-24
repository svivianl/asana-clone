import { Project, Projects } from "../../../types";

export type ErrorType = "load-projects" | "load-project" | "save-project";

export interface MessageError {
  type: ErrorType;
  message: string;
}

export type StatusType = "saved-project" | "updated-project" | "error-project";

export interface Status {
  type: StatusType;
  error?: MessageError;
}

export interface ProjectsState {
  isLoading: boolean;
  projects: Projects;
  project: Project;
  status: Status | null;
}
