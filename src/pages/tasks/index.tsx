import React from "react";

import { selectTasksIds, useLoadTasks } from "entities/task";
import { TaskRow } from "widgets/task-row";
import type { ITaskRowProps } from "widgets/task-row";
import { useAppSelector } from "shared/lib";
import { GenericList } from "shared/ui";
import { TaskForm } from "features/task/task-form";
import { TimerLayout } from "widgets/timer";
import { FullTime } from "features/full-time";

import { TaskPageLayout, Description } from "./ui";
import { TimerSettings } from "../../features/timer-settings";

const TasksPage = () => {
  useLoadTasks();

  const tasksIds = useAppSelector(selectTasksIds);
  const props = tasksIds.map((item) => ({ id: item } as ITaskRowProps));

  return (
    <TaskPageLayout timer={<TimerLayout />}>
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
