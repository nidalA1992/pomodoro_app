import type { ReactNode } from "react";
import React from "react";

import s from "./styles.module.scss";

import type { ButtonProps } from "../base-button";
import { BaseButton } from "../base-button";

type IconButtonProps = ButtonProps & { icon: ReactNode };

export const MenuButton = (props: IconButtonProps) => {
  const { disabled, icon, children, onClick } = props;
  return (
    <BaseButton
      className={s["menu-button"]}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </BaseButton>
  );
};
