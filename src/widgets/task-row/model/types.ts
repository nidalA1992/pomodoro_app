import { Position } from "features/task/task-dropdown";
import { TaskElementActions } from "./enums";

export interface TaskElementState {
  position: Position;
  amount: number;
  content: string;
  menuIsOpen: boolean;
  editMode: boolean;
}

interface TaskElementSetPosition {
  type: TaskElementActions.SET_POSITION;
  payload: Position;
}

interface TaskElementOpen {
  type: TaskElementActions.OPEN;
}

interface TaskElementClose {
  type: TaskElementActions.CLOSE;
}

interface TaskElementIncrease {
  type: TaskElementActions.INCREASE;
}

interface TaskElementDecrease {
  type: TaskElementActions.DECREASE;
}

interface TaskElementCloseEditMode {
  type: TaskElementActions.CLOSE_EDIT_MODE;
}

interface TaskElementEdit {
  type: TaskElementActions.EDIT;
  payload: string;
}

interface TaskElementSetEditMode {
  type: TaskElementActions.OPEN_EDIT_MODE;
}

export type TaskElementAction =
  | TaskElementIncrease
  | TaskElementDecrease
  | TaskElementSetPosition
  | TaskElementOpen
  | TaskElementSetEditMode
  | TaskElementEdit
  | TaskElementCloseEditMode
  | TaskElementClose;

export type TaskFormReducer = (
  state: TaskElementState,
  action: TaskElementAction
) => TaskElementState;

export interface ITaskRowProps {
  id: TaskId;
}
