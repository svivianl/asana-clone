import { Project } from "../../../types";
import { ProjectsState } from "./projectsState";

export function createProjectsState(): ProjectsState {
  return {
    isLoading: false,
    projects: [],
    project: {} as Project,
    status: null,
  };
}
