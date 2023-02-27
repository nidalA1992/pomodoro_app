import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { toSecond } from "shared/lib";

import { TimerLocalStorage } from "../lib/TimerLocalStorage";
import type { ITimerOptions } from "./types";

const defaultTimerOptions: ITimerOptions = {
  timeValue: toSecond(25),
  smallBreak: toSecond(5),
  largeBreak: toSecond(15),
  largeBreakFrequency: toSecond(4),
};

const initialState: ITimerOptions =
  TimerLocalStorage.getTimerOptions() || defaultTimerOptions;

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTimer: {
      reducer: (state, action: PayloadAction<ITimerOptions>) => action.payload,
      prepare: (options) => {
        TimerLocalStorage.setTimerOptions(options);
        return { payload: options };
      },
    },
  },
});

export const { updateTimer } = timerSlice.actions;

export const timerReducer = timerSlice.reducer;
