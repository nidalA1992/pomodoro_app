import { Position } from "features/task-row/ui/task-dropdown";

import { TaskElementActions } from "../../model/enums";
import { TaskElementAction } from "../../model/types";

export const increase = (): TaskElementAction => ({
  type: TaskElementActions.INCREASE,
});
export const decrease = (): TaskElementAction => ({
  type: TaskElementActions.DECREASE,
});
export const open = (): TaskElementAction => ({
  type: TaskElementActions.OPEN,
});
export const close = (): TaskElementAction => ({
  type: TaskElementActions.CLOSE,
});
export const openEditMode = (): TaskElementAction => ({
  type: TaskElementActions.OPEN_EDIT_MODE,
});
export const setPosition = (payload: Position): TaskElementAction => ({
  type: TaskElementActions.SET_POSITION,
  payload,
});
export const edit = (payload: string): TaskElementAction => ({
  type: TaskElementActions.EDIT,
  payload,
});
export const closeEditMode = (): TaskElementAction => ({
  type: TaskElementActions.CLOSE_EDIT_MODE,
});
