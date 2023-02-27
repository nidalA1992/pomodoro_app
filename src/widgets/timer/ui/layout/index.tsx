import React from "react";
import type { ReactNode } from "react";

import s from "./styles.module.scss";
import { TimerStatus } from "../controls/types";

interface ITimerProps {
  taskText: string;
  pomodoro: number;
  taskNumber: number;
  displaySlot: ReactNode;
  controlsSlot: ReactNode;
  settingsSlot: ReactNode;
  status?: TimerStatus;
}

export const Layout = (props: ITimerProps) => {
  console.log("TimerLayoutRender");

  const status = "break";

  return (
    <div className={s.timer + ` ${s[status]}`}>
      <div className={s.head}>
        <span className={s.head__task}>{props.taskText}</span>
        <span className={s.head__count}>Помидор {props.pomodoro}</span>
        {props.settingsSlot}
      </div>
      <div className={s.body}>
        {props.displaySlot}
        <h3 className={s.title}>
          <span>Задача {props.taskNumber} -</span> {props.taskText}
        </h3>
        {props.controlsSlot}
      </div>
    </div>
  );
};
