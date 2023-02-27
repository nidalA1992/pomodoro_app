import React from "react";
import type { ReactNode } from "react";

import s from "./styles.module.scss";

interface ITitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: ITitleProps) => {
  return <h2 className={className ? s[className] : s.title}>{children}</h2>;
};
