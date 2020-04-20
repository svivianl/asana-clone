import { Project } from "../../../types";
import { ProjectsState } from "./projectsState";

export const createProjectsState = (): ProjectsState => {
  return {
    isLoading: false,
    projects: [],
    project: {} as Project,
    status: null,
  };
};
