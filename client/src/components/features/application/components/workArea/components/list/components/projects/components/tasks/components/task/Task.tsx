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

interface TaskProps {
  task?: Task;
}
const Task = ({ task }: TaskProps) => {
  // const [assignee, setAssignee] = useState({})
  // useEffect(() => {
  // }, [])
  const { assignee, creationDate } = task;

  return (
    <div>
      <TaskStatusBar />
      {/* <TaskDetails task={task} /> */}
      <TaskComment assignee={assignee} creationDate={creationDate} />
    </div>
  );
};

export default Task;
