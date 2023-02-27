import React from "react";

import s from "./styles.module.scss";

export const Agreement = () => {
  return (
    <label className={s.label}>
      <input className={s.input} type="checkbox" name="agreement" />
      Согласен на обработку персональных данных
    </label>
  );
};
