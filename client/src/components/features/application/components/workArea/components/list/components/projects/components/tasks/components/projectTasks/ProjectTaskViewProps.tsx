import { User } from "../../../../../../../../../../../../../types";

interface ProjectTaskViewProps {
  title: string;
  assignees?: User[];
  assignee?: User;
  dueDate: any;
  focused: boolean | null;
  assigneeButtonTitle: string;
  onInputChange: (e: any) => void;
  onAssigneeChange: (assigneeId: string) => void;
  onFocusChange: ({ focused }: any) => void;
  onDueDateChange: (date: any) => void;
}

export default ProjectTaskViewProps;
