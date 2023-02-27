import type { ReactNode } from "react";
import React from "react";

import s from "./styles.module.scss";

import type { ButtonProps } from "../base-button";
import { BaseButton } from "../base-button";

type IconButtonProps = ButtonProps & { icon: ReactNode };

export const IconButton = (props: IconButtonProps) => {
  const { disabled, icon, children, onClick } = props;
  return (
    <BaseButton
      className={s["icon-button"]}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </BaseButton>
  );
};
