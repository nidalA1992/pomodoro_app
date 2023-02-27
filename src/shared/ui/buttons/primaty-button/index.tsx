import React from "react";

import s from "./styles.module.scss";

import type { ButtonProps } from "../base-button";
import { BaseButton } from "../base-button";

export const PrimaryButton = (props: ButtonProps) => {
  const { children, disabled, onClick, className, style, isLoading, spinner } =
    props;

  return (
    <BaseButton
      style={style}
      className={s["primary-button"] + " " + className}
      disabled={disabled}
      onClick={onClick}
      isLoading={isLoading}
      spinner={spinner}
    >
      {children}
    </BaseButton>
  );
};
