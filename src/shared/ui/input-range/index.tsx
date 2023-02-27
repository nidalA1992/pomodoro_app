import React from "react";
import type { ChangeEvent, EventHandler } from "react";

import s from "./styles.module.scss";

interface IInputRangeProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: EventHandler<ChangeEvent<HTMLInputElement>>;
}

export const InputRange = (props: IInputRangeProps) => {
  return (
    <label className={s.label}>
      <div className={s.labelWrapper}>
        {props.label}
        <div className={s.value}>{props.value}</div>
      </div>
      <input
        type="range"
        className={s.range}
        value={props.value}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
      />
    </label>
  );
};
