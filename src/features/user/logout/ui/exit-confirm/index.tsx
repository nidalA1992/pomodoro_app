import { Button } from "shared/ui";

import s from "./styles.module.scss";

interface IExitConfirmProps {
  close: VoidFunction;
  confirm: VoidFunction;
}

export const ExitConfirm = (props: IExitConfirmProps) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}> Вы желаете выйти?</h2>
      <Button onClick={props.confirm} className="button">
        Да
      </Button>
      <Button onClick={props.close} className="button">
        Нет
      </Button>
    </div>
  );
};
