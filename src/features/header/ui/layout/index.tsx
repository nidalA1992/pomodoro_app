import React from "react";

import s from "./styles.module.scss";
import { ILayoutProps } from "shared/model";

export const Layout = (props: ILayoutProps) => {
  return <div className={s.wrapper}>{props.children}</div>;
};
