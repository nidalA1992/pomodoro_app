import React from "react";

import s from "./styles.module.scss";
import { useAppSelector } from "shared/lib";
import { selectUser } from "../../model";

export const User = () => {
  const user = useAppSelector(selectUser);

  return <div className={s.user}>{user}</div>;
};
