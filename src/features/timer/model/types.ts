export type TimerStatus =
  | "idle"
  | "process"
  | "process-pause"
  | "break"
  | "break-pause";

export enum ActionTypesEnum {
  SET_STATUS = "SET_STATUS",
  SET_TIME = "SET_TIME",
  // SET_ACTIVE = "SET_ACTIVE",
}

export interface ITimerState {
  time: number;
  breakAmount: number;
  breakTime: number;
  status: TimerStatus;
}

export interface SetStatus {
  type: ActionTypesEnum.SET_STATUS;
  payload: TimerStatus;
}

//
// export interface SetActive {
//   type: ActionTypesEnum.SET_ACTIVE;
//   payload: boolean;
// }

export interface SetTime {
  type: ActionTypesEnum.SET_TIME;
  payload: number;
}

export type ActionTypes = SetStatus | SetTime;
