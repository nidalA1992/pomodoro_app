import React from "react";

import s from "./styles.module.scss";

import type { ButtonProps } from "../base-button";
import { PrimaryButton } from "../primaty-button";

export const SecondaryButton = (props: ButtonProps) => {
  const { onClick, disabled, children } = props;
  return (
    <PrimaryButton
      onClick={onClick}
      disabled={disabled}
      className={s["secondary-button"]}
    >
      {children}
    </PrimaryButton>
  );
};
