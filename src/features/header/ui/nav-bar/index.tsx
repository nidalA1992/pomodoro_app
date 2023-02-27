import React from "react";

import { GenericList } from "shared/ui";

import { NavItem } from "../nav-item";
import { IRoute } from "../../model/types";

import s from "./styles.module.scss";

interface INavBarProps {
  routes: IRoute[];
}

export const NavBar = (props: INavBarProps) => {
  return (
    <nav className={s.nav}>
      <GenericList<typeof NavItem, IRoute>
        props={props.routes}
        Element={NavItem}
      />
    </nav>
  );
};
