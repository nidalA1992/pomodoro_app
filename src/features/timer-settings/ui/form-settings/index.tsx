import React, { useCallback, useReducer, useState } from "react";
import type { ChangeEvent } from "react";
import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "shared/lib";
import { Form, InputRange } from "shared/ui";
import { PrimaryButton } from "shared/ui/buttons";
import { updateTimer, selectTimerOptions } from "entities/timer";

import {
  setLargeBreak,
  setLargeBreakFrequency,
  setSmallBreak,
  setTimeValue,
} from "../../lib/action-creators";
import { Layout } from "../layout";
import { TimerRanges } from "../../model/enums";
import { reducer } from "../../lib/timer-reducer";

interface SettingPageCallbacks {
  [N: string]: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormSettings = () => {
  const options = useAppSelector(selectTimerOptions);
  const [state, stateDispatch] = useReducer(reducer, options);
  const appDispatch = useAppDispatch();
  const [saved, setSaved] = useState(false);

  const inputCallbacks: SettingPageCallbacks = {
    changeTimeValue: useCallback(
      (e) => stateDispatch(setTimeValue(+e.target.value)),
      []
    ),
    changeSmallBreak: useCallback(
      (e) => stateDispatch(setSmallBreak(+e.target.value)),
      []
    ),
    changeLargeBreak: useCallback(
      (e) => stateDispatch(setLargeBreak(+e.target.value)),
      []
    ),
    changeLargeBreakFrequency: useCallback(
      (e) => stateDispatch(setLargeBreakFrequency(+e.target.value)),
      []
    ),
  };

  const formCallbacks = {
    handleSubmit: useCallback(() => {
      appDispatch(updateTimer(state));
      setSaved(true);
    }, [state, options]),
    handleChange: useCallback(() => setSaved(false), [state, options]),
  };

  return (
    <Layout>
      <Form
        className={"settings-form"}
        onSubmit={formCallbacks.handleSubmit}
        onChange={formCallbacks.handleChange}
      >
        <InputRange
          label={"Время одного помидора"}
          onChange={inputCallbacks.changeTimeValue}
          value={state.timeValue}
          min={TimerRanges.MIN_TIME}
          max={TimerRanges.MAX_TIME}
        />
        <InputRange
          label={"Длительность маленького перерыва"}
          onChange={inputCallbacks.changeSmallBreak}
          value={state.smallBreak}
          min={TimerRanges.MIN_SMALL_BREAK}
          max={TimerRanges.MAX_SMALL_BREAK}
        />
        <InputRange
          label={"Длительность большого перерыва"}
          onChange={inputCallbacks.changeLargeBreak}
          value={state.largeBreak}
          min={TimerRanges.MIN_LARGE_BREAK}
          max={TimerRanges.MAX_LARGE_BREAK}
        />
        <InputRange
          label={"Частота больших перерывов"}
          onChange={inputCallbacks.changeLargeBreakFrequency}
          value={state.largeBreakFrequency}
          min={TimerRanges.MIN_LARGE_BREAK_FREQUENCY}
          max={TimerRanges.MAX_LARGE_BREAK_FREQUENCY}
        />
        <PrimaryButton disabled={shallowEqual(options, state) || saved}>
          {saved ? "Сохранено" : "Сохранить"}
        </PrimaryButton>
      </Form>
    </Layout>
  );
};
