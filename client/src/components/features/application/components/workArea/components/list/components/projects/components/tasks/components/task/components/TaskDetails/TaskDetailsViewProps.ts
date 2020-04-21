import { RawDraftContentState } from "draft-js";
import { User, Task } from "../../../../../../../../../../../../../../../types";

interface TaskDetailsViewProps {
  task: Task;
  assignees?: User[];
  assignee?: User;
  dueDate: any;
  focused: boolean | null;
  assigneeButtonTitle: string;
  onInputChange: (e: any) => void;
  onAssigneeChange: (assigneeId: string) => void;
  onFocusChange: ({ focused }: any) => void;
  onDueDateChange: (date: any) => void;
  onDescriptionChange: (content: RawDraftContentState) => void;
}

export default TaskDetailsViewProps;
