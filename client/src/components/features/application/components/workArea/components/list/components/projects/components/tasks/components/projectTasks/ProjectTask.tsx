import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ProjectTaskView from "./ProjectTaskView";
import ProjectTaskProps from "./ProjectTaskProps";
import * as userStore from "../../../../../../../../../../../../../store/users/store";
import * as store from "../task/store/store";
import { User } from "../../../../../../../../../../../../../types";

const ProjectTask = ({ task }: ProjectTaskProps) => {
  const [assignee, setAssignee] = useState({} as User);
  const [dueDate, setDueDate] = useState(moment());
  const [focused, setFocused] = useState(null);

  const assignees = useSelector(userStore.userSelectors.getUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    if (task.dueDate) {
      setDueDate(moment(task.dueDate, "YYYY-MM-DD"));
    }
  }, [task.dueDate]);

  const getAssignee = (id: string) => {
    const assigneesFound = assignees.filter((assignee) => assignee.id === id);
    return assigneesFound[0];
  };

  useEffect(() => {
    if (task.assigneeId && assignees) {
      setAssignee(getAssignee(task.assigneeId));
    }
  }, [task.assigneeId, assignees]);

  const handleTaskChange = (id: string, value: any) => {
    store.putTask(dispatch)({ ...task, [id]: value });
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    handleTaskChange(id, value);
    e.preventDefault();
  };

  const handleDueDateChange = (date: any) => {
    const newDueDate = new Date(date.format("YYYY-MM-DD"));
    handleTaskChange("dueDate", newDueDate.toISOString());
    setDueDate(date);
  };

  const handleAssigneeChange = (assigneeId: string) => {
    handleTaskChange("assigneeId", assigneeId);
    setAssignee(getAssignee(assigneeId));
  };

  const name = (assignee && assignee.name) || "";
  const assigneeButton = name || "Select an assignee";

  return (
    <ProjectTaskView
      title={task.title}
      assignees={assignees}
      assignee={assignee}
      dueDate={dueDate}
      focused={focused}
      assigneeButtonTitle={assigneeButton}
      onInputChange={handleInputChange}
      onAssigneeChange={handleAssigneeChange}
      onFocusChange={({ focused }: any) => setFocused(focused)}
      onDueDateChange={handleDueDateChange}
    />
  );
};

export default ProjectTask;
