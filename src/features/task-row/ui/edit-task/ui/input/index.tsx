import React, { useCallback } from "react";
import type { KeyboardEventHandler, ChangeEvent } from "react";

import s from "./styles.module.scss";

interface IEditTaskInputProps {
  value: string;
  onChange: (payload: string) => void;
  isEditMode: boolean;
  doneEditMode: VoidFunction;
}

export const EditTaskInput = (props: IEditTaskInputProps) => {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 50) return;
    props.onChange(e.target.value);
  }, []);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      props.doneEditMode();
    }
  };

  if (!props.isEditMode) return null;

  return (
    <input
      className={s.input}
      type="text"
      value={props.value}
      onChange={handleChange}
      autoFocus={true}
      onKeyDown={handleKeyDown}
    />
  );
};
