import { useReducer } from "react";

import { reducer } from "./timer-reducer";
import { ActionTypesEnum, ITimerState, TimerStatus } from "../model/types";

export const useTimerReducer = (initialState: ITimerState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //
  // const setActive = (payload: boolean) =>
  //   dispatch({ type: ActionTypesEnum.SET_ACTIVE, payload });

  const setStatus = (status: TimerStatus) =>
    dispatch({ type: ActionTypesEnum.SET_STATUS, payload: status });

  const setTime = (time: number) =>
    dispatch({ type: ActionTypesEnum.SET_TIME, payload: time });

  return { state, setTime, setStatus };
};
