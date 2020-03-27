import React, { useEffect, useState } from "react";
import TaskStatusBar from "./components/TaskStatusBar/TaskStatusBar";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import TaskComment from "./components/TaskComments/TaskComments";

export interface Task {
  id: string;
  assignee: string;
  title: string;
  description: string;
  status: string;
  dueDate: Date;
  creationDate: Date;
  project: string;
}

const taskInitialValues: Task = {
  id: "",
  assignee: "",
  title: "",
  description: "",
  status: "",
  dueDate: new Date(),
  creationDate: new Date(),
  project: ""
};

interface TaskProps {
  task?: Task;
}
const Task = ({ task = taskInitialValues }: TaskProps) => {
  // const [assignee, setAssignee] = useState({})
  // useEffect(() => {
  // }, [])

  return (
    <div>
      <TaskStatusBar />
      <TaskDetails task={task} />
      <TaskComment {...task} />
    </div>
  );
};

export default Task;
