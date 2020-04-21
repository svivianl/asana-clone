import { EditorState } from "draft-js";
import { User, Task } from "../../../../../../../../../../../../../../../types";

interface Mention {
  text: string;
  value: string;
}

interface TaskDetailsViewProps {
  task: Task;
  assignees?: User[];
  assignee?: User;
  dueDate: any;
  focused: boolean | null;
  assigneeButtonTitle: string;
  editorState: EditorState;
  isToolbarHidden: boolean;
  mentionSuggestions: Mention[];
  onInputChange: (e: any) => void;
  onAssigneeChange: (assigneeId: string) => void;
  onFocusChange: ({ focused }: any) => void;
  onDueDateChange: (date: any) => void;
  onDescriptionChange: (editorState: EditorState) => void;
  onEditorFocus: () => void;
  onEditorBlur: () => void;
}

export default TaskDetailsViewProps;
