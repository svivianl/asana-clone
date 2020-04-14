import { createSelector, Selector } from "reselect";
import { Task } from "../../../../../../../../../../../../../../types";
import { RootState } from "../../../../../../../../../../../../../../store/reducers";
import { TaskState } from "../../../../../../../../../../../../../../store/tasks/types";

export const getTaskState = (state: RootState) => state.taskState;

export const getTask: Selector<RootState, Task> = createSelector(
  getTaskState,
  (state: TaskState) => state?.task || []
);

export const getIsLoading: Selector<RootState, boolean> = createSelector(
  getTaskState,
  (state: TaskState) => state?.isLoading || false
);
