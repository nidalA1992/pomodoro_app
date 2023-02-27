import React from "react";

import { PrimaryButton, SecondaryButton } from "shared/ui/buttons";

import s from "./style.module.scss";
import { TimerStatus } from "../../model/types";
import { getControls } from "../../lib/get-controls";

interface ITimerControlsProps {
  status: TimerStatus;
  setStatus: (status: TimerStatus) => void;
}

export const TimerControls = ({ status, setStatus }: ITimerControlsProps) => {
  console.log("TimerControlsRender");
  const {
    handleDeactivateButton,
    handleActivateButton,
    deactivateButton,
    activateButton,
  } = getControls(status, setStatus);

  return (
    <div className={s.controls}>
      <PrimaryButton onClick={handleActivateButton}>
        {activateButton}
      </PrimaryButton>
      <SecondaryButton
        onClick={handleDeactivateButton}
        disabled={status === "idle"}
      >
        {deactivateButton}
      </SecondaryButton>
    </div>
  );
};
