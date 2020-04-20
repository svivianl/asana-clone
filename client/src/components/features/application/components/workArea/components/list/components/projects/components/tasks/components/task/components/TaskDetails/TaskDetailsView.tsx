import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import { taskInitialValues } from "../../types";
import TaskDetailsViewProps from "./TaskDetailsViewProps";
import "../../../../../../../../../../../../../../../css/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/components/TaskDetails/TaskDetails.css";

const TaskDetailsView = ({
  task = taskInitialValues,
  assignees,
  assignee,
  dueDate,
  focused,
  assigneeButtonTitle,
  onInputChange,
  onAssigneeChange,
  onFocusChange,
  onDueDateChange,
}: TaskDetailsViewProps) => {
  const { title, description, projectId } = task;

  return (
    <form className="form-full-width ml-0 mt-3 mb-3">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="title">
          Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Task's Title"
            defaultValue={title}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="dueDate">
          Due date
        </label>
        <div className="col-sm-8">
          <SingleDatePicker
            date={dueDate} // momentPropTypes.momentObj or null
            onDateChange={onDueDateChange} // PropTypes.func.isRequired
            focused={focused} // PropTypes.bool
            onFocusChange={onFocusChange} // PropTypes.func.isRequired
            id="task-due-date" // PropTypes.string.isRequired,
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="assignee">
          Assignee
        </label>
        <div className="col-sm-10">
          <div className="row m-1">
            {assignee && assignee.image && (
              <div className="pic-area mr-1">
                <img
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={assignee.image}
                  alt={assignee.name}
                />
              </div>
            )}
            <DropdownButton
              title={assigneeButtonTitle}
              variant="secondary"
              id="assigneeButton"
              onSelect={onAssigneeChange}
              value={task.assigneeId}
            >
              {assignees &&
                assignees.map((assignee) => (
                  <Dropdown.Item key={assignee.id} eventKey={assignee.id}>
                    {assignee.name}
                  </Dropdown.Item>
                ))}
            </DropdownButton>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Project</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="project"
            placeholder="Project"
            defaultValue={projectId}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="description"
            rows={10}
            placeholder={description}
            onChange={onInputChange}
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default TaskDetailsView;
