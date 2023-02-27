import { TimerOptionsActions } from "../model/enums";
import { TimerSettingAction } from "../model/types";

export const setTimeValue = (payload: number): TimerSettingAction => ({
  type: TimerOptionsActions.CHANGE_TIME_VALUE,
  payload,
});

export const setSmallBreak = (payload: number): TimerSettingAction => ({
  type: TimerOptionsActions.CHANGE_SMALL_BREAK,
  payload,
});

export const setLargeBreak = (payload: number): TimerSettingAction => ({
  type: TimerOptionsActions.CHANGE_LARGE_BREAK,
  payload,
});

export const setLargeBreakFrequency = (
  payload: number
): TimerSettingAction => ({
  type: TimerOptionsActions.CHANGE_LARGE_BREAK_FREQUENCY,
  payload,
});
