import { createSelector, Selector } from "reselect";
import { Projects } from "../../types";
import { RootState } from "../reducers";
import { ProjectsState } from "./types";

export const getProjectsState = (state: RootState) => state.projectsState;

export const getProjects: Selector<RootState, Projects> = createSelector(
  getProjectsState,
  (state: ProjectsState) => state?.projects || {}
);

export const getIsLoading: Selector<RootState, boolean> = createSelector(
  getProjectsState,
  (state: ProjectsState) => state?.isLoading || false
);
