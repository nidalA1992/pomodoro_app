import React from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { omit } from "../../lib/utils/omit";

import s from "./styles.module.scss";

type AdditionalButtonProps = {
  isLoading?: boolean;
  isActive?: boolean;
  isDisable?: boolean;
};

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  AdditionalButtonProps;

export const Button = (props: ButtonProps) => {
  const cl = s[props.className as string];
  const clActive = props.isActive ? s.isActive : "";
  const clDisable = props.isDisable ? s.isDisable : "";

  return (
    <button
      {...omit(props, "isLoading", "isDisabled", "isActive")}
      className={`${cl} ${clActive} ${clDisable}`}
    >
      {props.isLoading && <div className={s.spinner}></div>}
      {props.children}
    </button>
  );
};
