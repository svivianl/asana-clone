import React, { useEffect, useState } from "react";
import TaskStatusBar from "./components/TaskStatusBar/TaskStatusBar";
import TaskDetails from "./components/TaskDetails/TaskDetails";

interface Task {
  id: string;
  assignee: string;
  title: string;
  description: string;
  status: string;
  dueDate: Date;
  creationDate: Date;
  project: string;
}

interface TaskProps {
  task?: Task;
}
const Task = ({ task }: TaskProps) => {
  // const [assignee, setAssignee] = useState({})
  // useEffect(() => {
  // }, [])
  return (
    <div>
      <TaskStatusBar />
      {/* <TaskDetails task={task} /> */}
      {/* TODO: comments bar */}
    </div>
  );
};

export default Task;
