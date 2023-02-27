import React from "react";
import { Link } from "react-router-dom";

import { LogoIcon } from "../icons/logo-icon";

import s from "./styles.module.scss";

export const Logo = () => {
  return (
    <div className={s.logo}>
      <LogoIcon />
      <h1>pomodoro_box</h1>
      <Link to={"/"}></Link>
    </div>
  );
};
