import React, { useEffect, useState } from "react";
import TaskDetailsForm from "./components/TaskDetails/TaskDetails";
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
      {/* TODO: status bar */}
      <TaskDetailsForm task={task} />

      {/* TODO: comments bar */}
    </div>
  );
};

export default Task;
