import React from "react";

import { selectCommonPomodoro } from "entities/task";
import { selectTimerOptions } from "entities/timer";
import { FullTimeLayout } from "./layout";
import { useAppSelector } from "shared/lib";

export const FullTime = () => {
  const commonPomodoro = useAppSelector(selectCommonPomodoro);
  const { timeValue } = useAppSelector(selectTimerOptions);
  const amountMin = timeValue * commonPomodoro;

  const hour = Math.trunc(amountMin / 60);
  const min = amountMin - hour * 60;

  return <FullTimeLayout timeString={`${hour} ч ${min} мин`} />;
};
