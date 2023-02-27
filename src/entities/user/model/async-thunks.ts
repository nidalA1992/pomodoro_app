import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUserData } from "./types";
import { AuthApi } from "../api/AuthApi";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData: IUserData) => {
    const { username, email, password } = userData;
    const token = await AuthApi.signUp(username, email, password);
    return { token, username };
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData: Omit<IUserData, "email">) => {
    const { username, password } = userData;
    const token = await AuthApi.signIn(username, password);
    return { token, username };
  }
);
