import React from "react";

import { Button } from "shared/ui";

import s from "./styles.module.scss";

interface ITimerDisplayProps {
  isActive: boolean;
  timeValue: string;
}

export const Display = ({ isActive, timeValue }: ITimerDisplayProps) => {
  console.log("TimerDisplayLayoutRender");

  return (
    <div className={s.timerDisplay}>
      <div className={s.timerDigits + ` ${isActive ? s.active : ""}`}>
        {timeValue}
      </div>
      <Button className="increase-timer-button" />
    </div>
  );
};
