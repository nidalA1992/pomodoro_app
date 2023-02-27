import React from "react";

import s from "./style.module.scss";

interface IFullTimeStringProps {
  timeString: string;
}

export const FullTimeLayout = (props: IFullTimeStringProps) => {
  return <div className={s.time}>{props.timeString}</div>;
};
