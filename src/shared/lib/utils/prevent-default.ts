import type { SyntheticEvent } from "react";

export const preventDefault = (fn: Function) => (e: SyntheticEvent) => {
  e.preventDefault();
  fn(e);
};
