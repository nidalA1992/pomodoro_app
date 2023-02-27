import { EventHandler, SyntheticEvent } from "react";

export interface ICallbacks {
  increaseTask: () => void;
  decreaseTask: () => void;
  deleteTask: () => void;
  closeEditMode: () => void;
  toggleMenu: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}

export type Position = { top: number; left: number };

export interface ITaskDropDownProps {
  isDisable: boolean;
  pos: Position;
  cb: ICallbacks;
}
