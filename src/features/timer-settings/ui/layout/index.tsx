import React from "react";
import s from "./styles.module.scss";

import { ILayoutProps } from "shared/model";
import { Title } from "shared/ui";

export const Layout = (props: ILayoutProps) => {
  return (
    <div className={s.layout}>
      <Title className="settings-title">Настройки</Title>
      {props.children}
    </div>
  );
};
