import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "entities/user";
import { taskReducer } from "entities/task";
import { timerReducer } from "entities/timer";

const store = configureStore({
  reducer: { timer: timerReducer, tasks: taskReducer, auth: authReducer },
});

export default store;
