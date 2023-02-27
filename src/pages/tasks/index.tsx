import React from "react";

import { selectTasksIds, useLoadTasks } from "entities/task";
import type { ITaskRowProps } from "features/task-row";
import { useAppSelector } from "shared/lib";
import { GenericList } from "shared/ui";
import { TaskForm } from "features/task-row/ui/task-form";
import { FullTime } from "features/full-time";
import { Timer } from "features/timer";
import { TaskRow } from "features/task-row";

import { TaskPageLayout, Description } from "./ui";

const TasksPage = () => {
  useLoadTasks();

  const tasksIds = useAppSelector(selectTasksIds);
  const props = tasksIds.map((item) => ({ id: item } as ITaskRowProps));

  return (
    <TaskPageLayout timer={<Timer />}>
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
