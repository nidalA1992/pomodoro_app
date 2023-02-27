import { TimerOptionsActions } from "./enums";

interface ChangeTimeValue {
  type: TimerOptionsActions.CHANGE_TIME_VALUE;
  payload: number;
}

interface ChangeSmallBreak {
  type: TimerOptionsActions.CHANGE_SMALL_BREAK;
  payload: number;
}

interface ChangeLargeBreak {
  type: TimerOptionsActions.CHANGE_LARGE_BREAK;
  payload: number;
}

interface ChangeLargeBreakFrequency {
  type: TimerOptionsActions.CHANGE_LARGE_BREAK_FREQUENCY;
  payload: number;
}

export type TimerSettingAction =
  | ChangeTimeValue
  | ChangeSmallBreak
  | ChangeLargeBreak
  | ChangeLargeBreakFrequency;
