import { ITimerOptions } from "entities/timer";
import { TimerOptionsActions } from "../../model/enums";
import { TimerSettingAction } from "../../model/types";

export function reducer(
  state: ITimerOptions,
  { type, payload }: TimerSettingAction
) {
  switch (type) {
    case TimerOptionsActions.CHANGE_TIME_VALUE:
      return { ...state, timeValue: payload };
    case TimerOptionsActions.CHANGE_LARGE_BREAK:
      return { ...state, largeBreak: payload };
    case TimerOptionsActions.CHANGE_LARGE_BREAK_FREQUENCY:
      return { ...state, largeBreakFrequency: payload };
    case TimerOptionsActions.CHANGE_SMALL_BREAK:
      return { ...state, smallBreak: payload };
    default:
      return state;
  }
}
