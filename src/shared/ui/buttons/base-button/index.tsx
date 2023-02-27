import type {
  CSSProperties,
  EventHandler,
  ReactNode,
  SyntheticEvent,
} from "react";
import React from "react";

import s from "./styles.module.scss";

interface IButtonProps {
  disabled: boolean;
  onClick: EventHandler<SyntheticEvent>;
  children: ReactNode;
  className: string;
  style: CSSProperties;
  isLoading?: boolean;
  spinner?: ReactNode;
}

export type ButtonProps = Partial<IButtonProps>;

export const BaseButton = (props: ButtonProps) => {
  const { disabled, children, onClick, className, style, isLoading, spinner } =
    props;
  return (
    <button
      className={s.button + " " + className}
      onClick={onClick}
      disabled={disabled}
      style={style}
      data-valid={true}
    >
      {isLoading && spinner && "Loading..."}
      {children}
    </button>
  );
};
