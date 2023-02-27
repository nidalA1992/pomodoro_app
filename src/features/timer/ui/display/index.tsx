import React from "react";

import s from "./styles.module.scss";
import { CircleButton } from "shared/ui/buttons";
import { TimerStatus } from "../../model/types";

interface ITimerDisplayProps {
  status: TimerStatus;
  timeValue: string;
}

export const Display = ({ status, timeValue }: ITimerDisplayProps) => {
  console.log("TimerDisplayLayoutRender");

  return (
    <div className={s.timerDisplay}>
      <div className={s.timerDigits + " " + s[status]}>{timeValue}</div>
      <CircleButton size={50} fontSize={24}>
        +
      </CircleButton>
    </div>
  );
};
