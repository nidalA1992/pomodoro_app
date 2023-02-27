import React, { Component, ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

import store from "../models/store";

export const withRedux = (component: () => ReactNode) => () =>
  <ReduxProvider store={store}>{component()}</ReduxProvider>;
