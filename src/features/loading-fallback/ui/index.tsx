import React from "react";
import s from "./styles.module.scss";

export const LoadingFallback = () => {
  return (
    <div className={s.fallback}>
      <div className={s.spinner} />
    </div>
  );
};
