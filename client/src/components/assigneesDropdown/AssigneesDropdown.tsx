import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-dates/initialize";
import { User } from "../../types";
import TaskDetailsViewProps from "./AssigneesDropdownProps";
import "react-dates/lib/css/_datepicker.css";

const AssigneesDropdown = ({
  assignees,
  assignee,
  onAssigneeChange,
}: TaskDetailsViewProps) => {
  const assigneeButtonTitle =
    (assignee && assignee.name) || "Select an assignee";

  return (
    <div className="row m-1">
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
        title={assigneeButtonTitle}
        variant="secondary"
        id="assigneeButton"
        onSelect={onAssigneeChange}
        value={assignee ? assignee.id : ""}
      >
        {assignees &&
          assignees.map((assignee: User) => (
            <Dropdown.Item key={assignee.id} eventKey={assignee.id}>
              {assignee.name}
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </div>
  );
};

export default AssigneesDropdown;
