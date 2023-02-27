import { TimerControls } from "./controls";
import { Display } from "./display";
import { Layout } from "./layout";
import { useTimerReducer } from "../lib/useTimerReducer";
import { ITimerState } from "../model/types";
import { useEffect } from "react";

//temporary
const activeTask = {
  id: "TaskId",
  pomodoroAmount: 2,
  pomodoroPassed: 0,
  done: false,
  content: "task content",
  createdAt: "DateString",
  updatedAt: "DateString",
};
const pomodoroTime = 0.05 * 1000 * 60;
const breakTime = 0.05 * 1000 * 60;
const bigBreakTime = 15 * 1000 * 60;
const bigBreakFrequency = 4;

export const Timer = () => {
  console.log("TimerRender");

  const initialState: ITimerState = {
    status: "idle",
    breakTime,
    breakAmount: 0,
    time: pomodoroTime,
  };

  const { state, setTime, setStatus } = useTimerReducer(initialState);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (state.time === 0 && activeTask.pomodoroAmount === 0) {
      setStatus("idle");
    }

    if (state.status === "process" && state.time === 0) {
      console.log(activeTask.pomodoroAmount, activeTask.pomodoroPassed);
      setStatus("break");
      setTime(initialState.breakTime);
      // setPomodoroCompleted();
      activeTask.pomodoroAmount--;
    }

    if (state.status === "break" && state.time === 0) {
      setStatus("process");
      activeTask.pomodoroPassed++;

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
      taskNumber={5}
      taskText={activeTask?.content || ""}
      pomodoro={activeTask?.pomodoroPassed + 1 || 1}
      controlsSlot={
        <TimerControls setStatus={setStatus} status={state.status} />
      }
      displaySlot={
        <Display status={state.status} timeValue={format(state.time)} />
      }
      // settingsSlot={<TimerSettings />}
    />
  );
};

function format(timestamp: number) {
  const min = String(Math.floor(timestamp / 60 / 1000));
  const sec = String((timestamp / 1000) % 60);

  return `${min.length < 2 ? 0 : ""}${min} : ${sec.length < 2 ? 0 : ""}${sec}`;
}
