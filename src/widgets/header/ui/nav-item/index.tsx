import React from "react";
import { NavLink } from "react-router-dom";

import s from "./styles.module.scss";
import { IRoute } from "../../model/types";

export const NavItem = (props: IRoute) => {
  return (
    <NavLink className={s.link} activeClassName={s.active} to={props.path}>
      {props.title}
    </NavLink>
  );
};
