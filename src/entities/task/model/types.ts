import { EntityState } from "@reduxjs/toolkit";

import { FetchStatus } from "shared/model";

export interface ITask {
  id: TaskId;
  amount: number;
  passed?: number;
  content: string;
  createdAt: DateString;
  updatedAt: DateString;
}

export type ITaskState = EntityState<ITask> & {
  active: TaskId;
  commonPomodoro: number;
  status: FetchStatus;
  error: string;
};
