import { useReducer } from "react";

import { formGenericReducer } from "../utils/form-generic-reducer";
import { FormInitialState } from "../../model/types";

export const useFormGenericReducer = <T extends FormInitialState<T>>(
  initialState: T
) => {
  return useReducer(formGenericReducer, initialState);
};
