import React from "react";
import type { EventHandler, SyntheticEvent } from "react";

import { Button } from "shared/ui";

import { TimerStatus } from "./types";

import s from "./style.module.scss";

interface ITimerControlsProps {
  isPause: boolean;
  status: TimerStatus;
  setPause: EventHandler<SyntheticEvent>;
}

export const TimerControls = (props: ITimerControlsProps) => {
  console.log("TimerControlsRender");
  const { isPause, setPause, status } = props;

  let leftButton = isPause ? "Пауза" : "Продолжить";
  let rightButton = "Стоп";

  switch (status) {
    case "idle":
      leftButton = "Старт";
      break;
    case "process":
      if (!isPause) {
        rightButton = "Сделано";
      }
      break;
    case "break":
      rightButton = "Пропустить";
  }

  return (
    <div className={s.controls}>
      <Button className="button" onClick={props.setPause}>
        {leftButton}
      </Button>
      <Button disabled={status === "idle"} className="red-button">
        {rightButton}
      </Button>
    </div>
  );
};
