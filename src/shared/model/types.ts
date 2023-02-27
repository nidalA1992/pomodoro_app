import store from "app/models/store";
import { ReactNode } from "react";

export type Status = "idle" | "loading" | "success" | "failed";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface FormField {
  value: string;
  error: string;
}

export type FormInitialState<T> = {
  [K in keyof T]: FormField;
};

export interface FormDataAction<T> {
  type: string;
  value: string;
  field: keyof T;
}

export type FormDataReducerType = <T extends FormInitialState<T>>(
  state: T,
  action: FormDataAction<T>
) => FormInitialState<T>;

export interface ILayoutProps {
  children: ReactNode;
}
