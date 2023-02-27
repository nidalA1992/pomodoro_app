import { createAsyncThunk } from "@reduxjs/toolkit";

import { TaskApi } from "../../api/TaskApi";
import { ITask } from "../types";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return await TaskApi.getTasks();
});

export const fetchAddTask = createAsyncThunk(
  "tasks/addTask",
  async (task: string) => {
    return await TaskApi.addTask(task);
  }
);

export const fetchDeleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: TaskId) => {
    await TaskApi.deleteTask(id);
    return id;
  }
);

export const fetchEditTask = createAsyncThunk(
  "tasks/fetchEditTask",
  async (taskData: Omit<ITask, "updatedAt" | "createdAt">) => {
    const { id, content, amount } = taskData;
    return await TaskApi.editTask(id, content, amount);
  }
);
