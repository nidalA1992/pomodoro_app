import type { ReactNode, SyntheticEvent } from "react";

import { preventDefault } from "../../lib";

import s from "./styles.module.scss";

export type FormEventType = SyntheticEvent<
  HTMLFormElement | HTMLInputElement,
  Event
>;

export interface FormHandler {
  (e: FormEventType): void;
}

interface ISignFormProps {
  children: ReactNode;
  onSubmit: FormHandler;
  onChange?: FormHandler;
  className: string;
}

export const Form = (props: ISignFormProps) => {
  return (
    <form
      className={s[props.className]}
      onSubmit={preventDefault(props.onSubmit)}
      onChange={props.onChange}
    >
      {props.children}
    </form>
  );
};
