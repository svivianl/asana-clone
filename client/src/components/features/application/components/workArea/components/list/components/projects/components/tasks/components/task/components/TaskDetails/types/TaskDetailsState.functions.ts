import { User } from "../../../../../../../../../../../../../../../../types";

export const createtaskDetailsState = () => {
  return {
    isLoading: false,
    assignee: {} as User,
    assignees: [],
    status: null
  };
};
