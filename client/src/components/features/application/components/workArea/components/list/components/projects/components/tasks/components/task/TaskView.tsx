import React from "react";
import TaskStatusBar from "./components/TaskStatusBar/TaskStatusBar";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import TaskComment from "./components/TaskComments/TaskComments";
import { User, Task } from "../../../../../../../../../../../../../types";
import { taskInitialValues } from "./types";

interface TaskProps {
  task?: Task;
  assignee?: User;
  onChangeAssignee: (id: string) => void;
}
const TaskView = ({
  task = taskInitialValues,
  assignee,
  onChangeAssignee,
}: TaskProps) => {
  // task.creationDate -> 2020-03-25T13:58:46.655Z

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <TaskStatusBar />
        <TaskDetails
          task={task}
          assignee={assignee}
          onChangeAssignee={onChangeAssignee}
        />
        <TaskComment task={task} assignee={assignee} />
      </div>
    </div>
  );
};

export default TaskView;
