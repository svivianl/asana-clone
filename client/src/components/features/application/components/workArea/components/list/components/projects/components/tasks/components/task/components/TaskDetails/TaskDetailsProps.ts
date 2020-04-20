import { User, Task } from "../../../../../../../../../../../../../../../types";

interface TaskDetailsProps {
  // task: Task;
  assignee?: User;
  onChangeAssignee: (id: string) => void;
  onChange?: (taskBody: Task) => void;
}

export default TaskDetailsProps;
