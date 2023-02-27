import { useEffect } from "react";
import { ReactNode } from "react";

import { TimerControls } from "./controls";
import { Display } from "./display";
import { Layout } from "./layout";
import { useTimerReducer } from "../lib/useTimerReducer";
import type { ITimerState } from "../model/types";
import { format } from "../lib/format-time";
import { useAppSelector } from "shared/lib";
import {
  selectActiveTaskId,
  selectTaskById,
  selectTasksIds,
} from "entities/task";

//temporary
// const activeTask = {
//   id: "TaskId",
//   pomodoroAmount: 2,
//   pomodoroPassed: 0,
//   done: false,
//   content: "task content",
//   createdAt: "DateString",
//   updatedAt: "DateString",
// };

const pomodoroTime = 0.05 * 1000 * 60;
const breakTime = 0.05 * 1000 * 60;
const bigBreakTime = 15 * 1000 * 60;
const bigBreakFrequency = 4;

interface ITimerProps {
  settings: ReactNode;
}

export const Timer = ({ settings }: ITimerProps) => {
  console.log("TimerRender");

  const activeTaskId = useAppSelector(selectActiveTaskId);
  const tasks = useAppSelector(selectTasksIds);
  const activeTask = useAppSelector(selectTaskById(activeTaskId));

  const initialState: ITimerState = {
    status: "idle",
    breakTime,
    breakAmount: 0,
    time: pomodoroTime,
  };

  const { state, setTime, setStatus } = useTimerReducer(initialState);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (state.time === 0 && activeTask?.amount === 0) {
      setStatus("idle");
    }

    if (state.status === "process" && state.time === 0) {
      console.log(activeTask?.amount, activeTask?.passed);
      setStatus("break");
      setTime(initialState.breakTime);
      // setPomodoroCompleted();
      // activeTask?.amount--;
    }

    if (state.status === "break" && state.time === 0) {
      setStatus("process");
      // activeTask.pomodoroPassed++;

      setTime(initialState.time);
      // setPomodoroCompleted();
    }

    if (state.status === "idle") {
      setTime(initialState.time);
    }

    if (state.status === "process" || state.status === "break") {
      timeoutId = setTimeout(() => setTime(state.time - 1000), 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [state.time, state.status]);

  return (
    <Layout
      status={state.status}
      taskNumber={tasks.indexOf(activeTaskId) + 1}
      taskText={activeTask?.content || ""}
      pomodoro={activeTask?.passed || 1}
      controlsSlot={
        <TimerControls setStatus={setStatus} status={state.status} />
      }
      displaySlot={
        <Display status={state.status} timeValue={format(state.time)} />
      }
      settingsSlot={settings}
    />
  );
};
