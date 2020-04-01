import { User } from "../../../../../../../../../../../../../../../../types";

type StatusType = "saved" | "updated" | "error";

type MessageErrorType = "load-assignee" | "load-assignees";

export interface MessageError {
  type: MessageErrorType;
  message: string;
}

interface StatusMessageType {
  type: StatusType;
  error?: MessageError;
}

export interface TaskDetailsState {
  isLoading: boolean;
  assignee: User;
  assignees: User[];
  status: null | StatusMessageType;
}
