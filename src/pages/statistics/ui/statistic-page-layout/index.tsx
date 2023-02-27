import React from "react";
import type { ReactNode } from "react";

import s from "./styles.module.scss";
import { ILayoutProps } from "shared/model";

type StatisticContentLayout = {
  head: ReactNode;
} & ILayoutProps;

const StatisticContentLayout = (props: StatisticContentLayout) => {
  return (
    <div className={s.wrapper}>
      <div className={s.head}>{props.head}</div>
      <div className={s.content}>{props.children}</div>
    </div>
  );
};

export default StatisticContentLayout;
