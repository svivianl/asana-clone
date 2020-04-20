import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TaskView from "./TaskView";
import * as store from "../../../../../../../../../../../../../store/users/store";
import {
  User,
  Task as TaskType,
} from "../../../../../../../../../../../../../types";
import { taskInitialValues } from "./types";

interface TaskProps {
  task: TaskType;
}
const Task = ({ task = taskInitialValues }: TaskProps) => {
  // task.creationDate -> 2020-03-25T13:58:46.655Z
  const [assignee, setAssignee] = useState({} as User);
  const assignees = useSelector(store.userSelectors.getUsers);

  const getAssignee = (id: string) => {
    const assigneesFound = assignees.filter((assignee) => assignee.id === id);
    return assigneesFound[0];
  };

  useEffect(() => {
    if (task.assigneeId && assignees) {
      setAssignee(getAssignee(task.assigneeId));
    }
  }, [task.assigneeId, assignees]);

  return (
    <TaskView
      task={task}
      assignee={assignee}
      onChangeAssignee={(assigneeId: string) =>
        setAssignee(getAssignee(assigneeId))
      }
    />
  );
};

export default Task;
