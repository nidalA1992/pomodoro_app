import React from "react";
import type { ReactNode } from "react";

import s from "./styles.module.scss";

interface ILayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export const Layout = (props: ILayoutProps) => (
  <>
    <header className={s.header}>
      <div className={s.container}>{props.header}</div>
    </header>
    <main className={s.main}>
      <div className={s.container}>{props.children}</div>
    </main>
  </>
);
