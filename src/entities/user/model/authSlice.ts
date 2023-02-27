import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//TODO: решить проблему с использованием app в entities
import { client } from "app/models/apollo";

import { errorHandler } from "shared/lib/utils/error-handler";

import type { IAuthState } from "./types";
import { signIn, signUp } from "./async-thunks";
import { AuthLocalStorage } from "../lib/AuthLocalStorage";

const initialState: IAuthState = {
  user: "",
  status: "idle",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.status = "idle";
      state.user = "";
      state.error = "";
      client.resetStore();
      AuthLocalStorage.removeAuthData();
    },
    setUser: (state, action: PayloadAction<UserName>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        AuthLocalStorage.setUser(payload.username).setToken(payload.token);
        state.user = payload.username;
        state.status = "success";
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = errorHandler(action.error);
        state.status = "failed";
      });
    builder
      .addCase(signIn.pending, (state, action) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        AuthLocalStorage.setUser(payload.username).setToken(payload.token);
        state.user = payload.username;
        state.status = "success";
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = errorHandler(action.error);
        state.status = "failed";
      });
  },
});

export const authReducer = authSlice.reducer;

export const { signOut, setUser } = authSlice.actions;
