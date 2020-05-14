import { Project, Projects } from "../../../types";
import { ProjectsState } from "./projectsState";

export function createProjectsState(): ProjectsState {
  return {
    isLoading: false,
    projects: {} as Projects,
    project: {} as Project,
    status: null,
  };
}
