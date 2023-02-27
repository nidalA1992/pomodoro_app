import type { Dispatch } from "react";

import type { FormEventType } from "shared/ui/form";

import { validationRules } from "./validation-rules";
import { FormDataAction } from "../../../model/types";

export const validation =
  <T, K extends keyof T>(dispatch: Dispatch<FormDataAction<T>>) =>
  (e: FormEventType) => {
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      e.target.dataset.valid = String(e.target.checked);
    }

    if (e.currentTarget instanceof HTMLFormElement) {
      const elements = Array.from(e.currentTarget.elements);
      dispatch({
        type: "SET_FIELD_VALUE",
        field: "isDisabled" as K,
        value: String(
          !elements.every((i) => i.getAttribute("data-valid") === "true")
        ),
      });
      return;
    }

    if (e.target instanceof HTMLInputElement) {
      const { name, value } = e.target;
      const inputType = name;
      const rule = validationRules(inputType);

      if (!rule.isValid(value)) {
        e.target.dataset.valid = "false";
        dispatch({
          type: "SET_FIELD_ERROR",
          field: inputType as K,
          value: e.type === "blur" ? rule.errorMessage : "",
        });
        setTimeout(() => {
          dispatch({
            type: "SET_FIELD_ERROR",
            field: inputType as K,
            value: "",
          });
        }, 3000);
        return;
      }

      e.target.dataset.valid = "true";
      dispatch({
        type: "SET_FIELD_VALUE",
        field: inputType as K,
        value,
      });
    }
  };
