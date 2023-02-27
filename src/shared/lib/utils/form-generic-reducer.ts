import { FormDataReducerType } from "../../model/types";

export const formGenericReducer: FormDataReducerType = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        [action.field]: { error: "", value: action.value },
      };
    case "SET_FIELD_ERROR":
      return {
        ...state,
        [action.field]: {
          value: state[action.field]?.value,
          error: action.value,
        },
      };
    default:
      return state;
  }
};
