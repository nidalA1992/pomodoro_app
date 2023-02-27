import React from "react";

import s from "./styles.module.scss";

interface IUserBadgeProps {
  username: UserName;
}

export const UserBadge = ({ username }: IUserBadgeProps) => {
  return <div className={s.user}>{username}</div>;
};
