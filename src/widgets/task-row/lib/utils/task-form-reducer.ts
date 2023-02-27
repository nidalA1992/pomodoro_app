import type { TaskFormReducer } from "../../model/types";
import { TaskElementActions } from "../../model/enums";

export const reducer: TaskFormReducer = (state, action) => {
  switch (action.type) {
    case TaskElementActions.INCREASE:
      return { ...state, amount: state.amount + 1 };
    case TaskElementActions.DECREASE:
      return { ...state, amount: state.amount - 1 };
    case TaskElementActions.OPEN:
      return { ...state, menuIsOpen: true };
    case TaskElementActions.CLOSE:
      return { ...state, menuIsOpen: false };
    case TaskElementActions.SET_POSITION:
      return { ...state, position: action.payload };
    case TaskElementActions.EDIT:
      return { ...state, content: action.payload };
    case TaskElementActions.OPEN_EDIT_MODE:
      return {
        ...state,
        editMode: true,
        menuIsOpen: false,
      };
    case TaskElementActions.CLOSE_EDIT_MODE:
      return { ...state, editMode: false };
    default:
      return state;
  }
};
