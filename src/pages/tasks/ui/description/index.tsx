import React from "react";

import s from "./styles.module.scss";

import { Title } from "shared/ui";

export const Description = () => {
  return (
    <div className={s.description}>
      <Title>Ура! Теперь можно начать работать:</Title>
      <ul>
        <li> Выберите категорию и напишите название текущей задачи</li>
        <li> Запустите таймер («помидор»)</li>
        <li> Работайте пока «помидор» не прозвонит</li>
        <li> Сделайте короткий перерыв (3-5 минут)</li>
        <li>
          Продолжайте работать «помидор» за «помидором», пока задача не будут
          выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
        </li>
      </ul>
    </div>
  );
};
