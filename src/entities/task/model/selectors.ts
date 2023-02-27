import { taskAdapter } from "./adapter";
import { RootState } from "shared/model";

export const { selectById, selectIds: selectTasksIds } =
  taskAdapter.getSelectors<RootState>((state) => state.tasks);

export const selectTaskById = (taskId: TaskId) => (state: RootState) =>
  selectById(state, taskId);

export const selectActiveTaskId = (state: RootState) => state.tasks.active;
export const selectCommonPomodoro = (state: RootState) =>
  state.tasks.commonPomodoro;
