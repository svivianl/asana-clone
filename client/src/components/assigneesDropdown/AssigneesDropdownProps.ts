import { User } from "../../types";

interface AssigneeDropdownProps {
  assignees?: User[];
  assignee?: User;
  onAssigneeChange: (assigneeId: string) => void;
}

export default AssigneeDropdownProps;
