import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import ProjectTaskViewProps from "./ProjectTaskViewProps";

const ProjectTaskView = ({
  taskId,
  title,
  assignees,
  assignee,
  dueDate,
  focused,
  assigneeButtonTitle,
  onInputChange,
  onAssigneeChange,
  onFocusChange,
  onDueDateChange,
}: ProjectTaskViewProps) => {
  return (
    <tr>
      <th scope="row">
        <input
          type="text"
          className="form-control"
          id={`task-title-${taskId}`}
          placeholder="Task's Title"
          defaultValue={title}
          onChange={onInputChange}
        />
      </th>
      <td>
        {assignee && assignee.image && (
          <div className="pic-area mr-1 d-inline">
            <img
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              src={assignee.image}
              alt={assignee.name}
            />
          </div>
        )}
        <DropdownButton
          className={"d-inline"}
          title={assigneeButtonTitle}
          variant="secondary"
          id={`task-assigneeButton-${taskId}`}
          onSelect={onAssigneeChange}
          value={assignee ? assignee.id : ""}
        >
          {assignees &&
            assignees.map((assignee) => (
              <Dropdown.Item key={assignee.id} eventKey={assignee.id}>
                {assignee.name}
              </Dropdown.Item>
            ))}
        </DropdownButton>
      </td>
      <td>
        <SingleDatePicker
          date={dueDate} // momentPropTypes.momentObj or null
          onDateChange={onDueDateChange} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={onFocusChange} // PropTypes.func.isRequired
          id={`task-due-date-${taskId}`} // PropTypes.string.isRequired,
        />
      </td>
    </tr>
  );
};

export default ProjectTaskView;
