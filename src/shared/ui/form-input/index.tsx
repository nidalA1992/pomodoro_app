import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

import s from "./style.module.scss";

export type CustomInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface ISignInputProps {
  label: string;
  error: string;
  input: CustomInputProps;
}

export const FormInput = (props: Partial<ISignInputProps>) => {
  return (
    <label className={s.label}>
      <input className={s.input} {...props.input} data-valid={false} />
      {props.label}
      {!!props.error?.length && <p className={s.error}>{props.error}</p>}
    </label>
  );
};
