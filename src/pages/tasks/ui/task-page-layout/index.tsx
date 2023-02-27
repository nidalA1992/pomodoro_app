import React from "react";
import type { ReactNode } from "react";

import s from "./style.module.scss";
import { ILayoutProps } from "shared/model";

type TaskPageLayout = { timer: ReactNode } & ILayoutProps;

export const TaskPageLayout = (props: TaskPageLayout) => {
  return (
    <div className={s.wrapper}>
      <div className={s.table}>{props.children}</div>
      <div className={s.timer}>{props.timer}</div>
    </div>
  );
};
