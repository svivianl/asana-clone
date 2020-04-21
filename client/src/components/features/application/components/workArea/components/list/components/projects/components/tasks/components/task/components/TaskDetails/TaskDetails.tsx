import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { RawDraftContentState } from "draft-js";
import * as userStore from "../../../../../../../../../../../../../../../store/users/store";
// import { taskInitialValues } from "../../types";
import TaskDetailsView from "./TaskDetailsView";
import TaskDetailsProps from "./TaskDetailsProps";
// import { Task } from "../../../../../../../../../../../../../../../types";
import * as store from "../../store/store";

const TaskDetails = ({
  // task = taskInitialValues,
  assignee,
  onChangeAssignee,
}: TaskDetailsProps) => {
  const [dueDate, setDueDate] = useState(moment());
  const [focused, setFocused] = useState(null);
  const assignees = useSelector(userStore.userSelectors.getUsers);
  const task = useSelector(store.userSelectors.getTask);
  const dispatch = useDispatch();

  useEffect(() => {
    if (task.dueDate) {
      setDueDate(moment(task.dueDate, "YYYY-MM-DD"));
    }
  }, [task.dueDate]);

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
    onChangeAssignee(assigneeId);
  };

  const handleTextAreaChange = (content: RawDraftContentState) => {
    handleTaskChange("description", content);
  };

  const name = (assignee && assignee.name) || "";
  const assigneeButton = name || "Select an assignee";

  return (
    <TaskDetailsView
      task={task}
      assignees={assignees}
      assignee={assignee}
      dueDate={dueDate}
      focused={focused}
      assigneeButtonTitle={assigneeButton}
      onInputChange={handleInputChange}
      onAssigneeChange={handleAssigneeChange}
      onFocusChange={({ focused }: any) => setFocused(focused)}
      onDueDateChange={handleDueDateChange}
      onDescriptionChange={handleTextAreaChange}
    />
  );
};

export default TaskDetails;
