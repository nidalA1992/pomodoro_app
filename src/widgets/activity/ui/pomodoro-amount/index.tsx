import React, { memo } from "react";

import { Pomodoro } from "widgets/activity/ui/icons/pomodoro";

import PomodoroSmile from "../icons/pomodoro-smile";

import s from "./styles.module.scss";

export const PomodoroAmount = () => {
  const amount = true;
  return (
    <div className={s.wrapper + ` ${amount ? s.has : ""}`}>
      {amount ? (
        <>
          <div className={s.amount}>
            <Pomodoro />x {22}
          </div>
          <div className={s.footer}>{`${22} помидора`}</div>
        </>
      ) : (
        <PomodoroSmile />
      )}
    </div>
  );
};
