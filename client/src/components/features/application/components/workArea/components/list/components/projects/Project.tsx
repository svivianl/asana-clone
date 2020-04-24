import React from "react";
import { useSelector } from "react-redux";
import ProjectView from "./ProjectView";
import { projectsSelectors } from "../../../../../../../../../store/projects/store";
import * as store from "./components/tasks/components/task/store/store";

const Project = () => {
  // const project = useSelector(projectsSelectors.getProject);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    console.log("{[id]: value} : ", { [id]: value });
    // store.putTask(dispatch)({ ...task, [id]: value });
    e.preventDefault();
  };

  return <ProjectView onInputChange={handleInputChange} />;
};

export default Project;
