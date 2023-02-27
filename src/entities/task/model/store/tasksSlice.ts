import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { errorHandler } from "shared/lib";

import type { ITaskState } from "../types";
import { taskAdapter } from "./adapter";
import {
  fetchAddTask,
  fetchDeleteTask,
  fetchEditTask,
  fetchTasks,
} from "./async-thunks";

const initialState: ITaskState = taskAdapter.getInitialState({
  commonPomodoro: 0,
  active: "",
  error: "",
  status: "idle",
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setActiveTask: (state, action: PayloadAction<TaskId>) => {
      state.active = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.active = payload[0].id;
        state.commonPomodoro = payload.reduce((s, i) => (s += i.amount), 0);
        taskAdapter.setMany(state, payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = errorHandler(action.error);
      });
    builder
      .addCase(fetchAddTask.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchAddTask.fulfilled, (state, action) => {
        state.status = "success";
        taskAdapter.addOne(state, action.payload);
        state.commonPomodoro += 1;
      })
      .addCase(fetchAddTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = errorHandler(action.error);
      });
    builder
      .addCase(fetchDeleteTask.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchDeleteTask.fulfilled, (state, action) => {
        state.status = "success";
        /*TODO: оптимизировать увелечение счеткича общего еколичества помидоров*/
        taskAdapter.removeOne(state, action.payload);
        state.commonPomodoro = Object.values(state.entities).reduce(
          (s, i) => (s += i?.amount || 0),
          0
        );
      })
      .addCase(fetchDeleteTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = errorHandler(action.error);
      });
    builder
      .addCase(fetchEditTask.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchEditTask.fulfilled, (state, action) => {
        state.status = "success";
        taskAdapter.setOne(state, action.payload);
        state.commonPomodoro = Object.values(state.entities).reduce(
          (s, i) => (s += i?.amount || 0),
          0
        );
      })
      .addCase(fetchEditTask.rejected, (state, actions) => {
        state.status = "failed";
        state.error = errorHandler(actions.error);
      });
  },
});

export const { setActiveTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
