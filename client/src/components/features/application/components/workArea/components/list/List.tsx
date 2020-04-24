import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // Redirect,
  // Route,
  RouteComponentProps,
  // Switch,
  // withRouter,
} from "react-router";
import ProjectView from "./components/projects/ProjectView";
import * as store from "../../../../../../../store/projects/store";

interface MatchParams {
  projectId: string;
}
type BaseProps = RouteComponentProps<MatchParams>;

const List = ({
  match: {
    params: { projectId },
  },
}: BaseProps) => {
  const projects = useSelector(store.projectsSelectors.getProjects);
  const currentProject = useSelector(store.projectsSelectors.getCurrentProject);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(projects).length && projects.constructor === Object) {
      store.getProjects(dispatch)();
    }
  }, [projects]);

  useEffect(() => {
    if (currentProject.id !== projectId) {
      store.getProjectTasks(dispatch)(projectId);
    }
  }, [currentProject]);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    console.log("{[id]: value} : ", { [id]: value });
    // store.putTask(dispatch)({ ...task, [id]: value });
    e.preventDefault();
  };

  return (
    <ProjectView project={currentProject} onInputChange={handleInputChange} />
  );
};

export default List;
