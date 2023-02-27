import React from "react";

import s from "./styles.module.scss";

import type { ButtonProps } from "../base-button";
import { PrimaryButton } from "../primaty-button";

type CircleButtonProps = ButtonProps & { size: number; fontSize?: number };

export const CircleButton = (props: CircleButtonProps) => {
  const { children, onClick, className, disabled, size, fontSize } = props;
  return (
    <PrimaryButton
      style={{
        width: size + "px",
        height: size + "px",
        fontSize: fontSize + "px",
      }}
      onClick={onClick}
      disabled={disabled}
      className={s["circle-button"] + " " + className}
    >
      {children}
    </PrimaryButton>
  );
};
