import React from "react";

import { selectTasksIds, useLoadTasks } from "entities/task";
import type { ITaskRowProps } from "features/task-row";
import { useAppSelector } from "shared/lib";
import { GenericList } from "shared/ui";
import { FullTime } from "features/full-time";
import { Timer } from "features/timer";
import { TaskRow } from "features/task-row";
import { TaskForm } from "features/task-form";

import { TaskPageLayout, Description } from "./ui";
import { TimerSettings } from "features/timer-settings";

const TasksPage = () => {
  useLoadTasks();

  const tasksIds = useAppSelector(selectTasksIds);
  const props = tasksIds.map((item) => ({ id: item } as ITaskRowProps));

  return (
    <TaskPageLayout timer={<Timer settings={<TimerSettings />} />}>
      <Description />
      <TaskForm />
      <GenericList<typeof TaskRow, ITaskRowProps>
        props={props}
        Element={TaskRow}
      />
      <FullTime />
    </TaskPageLayout>
  );
};

export default TasksPage;
