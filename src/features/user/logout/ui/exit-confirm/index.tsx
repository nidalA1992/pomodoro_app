import s from "./styles.module.scss";
import { PrimaryButton, SecondaryButton } from "shared/ui/buttons";

interface IExitConfirmProps {
  close: VoidFunction;
  confirm: VoidFunction;
}

export const ExitConfirm = (props: IExitConfirmProps) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}> Вы желаете выйти?</h2>
      <SecondaryButton onClick={props.confirm}>Да</SecondaryButton>
      <PrimaryButton onClick={props.close}>Нет</PrimaryButton>
    </div>
  );
};
