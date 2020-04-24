import React from "react";
import ProjectTask from "./components/tasks/components/projectTasks/ProjectTask";
import ProjectViewProps from "./ProjectViewProps";

const ProjectView = ({ project, onInputChange }: ProjectViewProps) => {
  const { name, tasks } = project;

  return (
    <div className="form-full-width ml-0 mt-3 mb-3">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="project-name">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="project-name"
            placeholder="Project's name"
            defaultValue={name}
            onChange={onInputChange}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task name</th>
            <th scope="col">Assignee</th>
            <th scope="col">Due date</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => <ProjectTask key={task.id} task={task} />)}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectView;
