import React from "react"; //, { useEffect, useState }
import TaskStatusBar from "./components/TaskStatusBar/TaskStatusBar";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import TaskComment from "./components/TaskComments/TaskComments";
import { Task } from "../../../../../../../../../../../../../types";

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
const TaskView = ({ task = taskInitialValues }: TaskProps) => {
  // const [assignee, setAssignee] = useState({})
  // useEffect(() => {
  // }, [])

  // task.creationDate -> 2020-03-25T13:58:46.655Z

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          height: "100vh"
        }}
      >
        <TaskStatusBar />
        <TaskDetails task={task} />
        <TaskComment {...task} />
      </div>
    </div>
  );
};

export default TaskView;
