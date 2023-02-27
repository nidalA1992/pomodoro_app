import { useCallback, useEffect, useState } from "react";

import { TimerSettings } from "features/timer-settings";
import { timeFormat, useAppSelector } from "shared/lib";
import {
  selectActiveTaskId,
  selectTaskById,
  selectTasksIds,
} from "entities/task";
import { selectTimerOptions } from "entities/timer";

import { TimerStatus } from "./controls/types";
import { TimerControls } from "./controls";
import { Display } from "./display";
import { Layout } from "./layout";

export const TimerLayout = () => {
  console.log("TimerRender");

  const activeTaskId = useAppSelector(selectActiveTaskId);
  const activeTask = useAppSelector(selectTaskById(activeTaskId));
  const tasksIds = useAppSelector(selectTasksIds);
  const { timeValue } = useAppSelector(selectTimerOptions);

  const [time, setTime] = useState(timeValue);

  const [isPause, setIsPause] = useState(true);
  const [status, setStatus] = useState<TimerStatus>("idle");

  const callbacks = {
    pause: useCallback(() => setIsPause(true), []),
  };

  // синхронизация локального стейта с глобальным
  useEffect(() => {
    setTime(timeValue);
  }, [timeValue]);

  useEffect(() => {}, []);

  return (
    <Layout
      taskNumber={tasksIds.indexOf(activeTaskId) + 1}
      taskText={activeTask?.content || ""}
      pomodoro={activeTask?.passed || 1}
      controlsSlot={
        <TimerControls setPause={() => {}} isPause={false} status={"idle"} />
      }
      displaySlot={<Display isActive={false} timeValue={timeFormat(time)} />}
      settingsSlot={<TimerSettings />}
    />
  );
};
