import React, { memo } from "react";

import s from "./styles.module.scss";

export const DayDescription = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Понедельник</h3>
      <p className={s.description}>
        Вы работали над задачами в теении{" "}
        <span className={s.time}>51 минуты</span>
      </p>
    </div>
  );
};
