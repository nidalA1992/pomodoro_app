import { ActionTypes, ActionTypesEnum, ITimerState } from "../model/types";

export const reducer = (state: ITimerState, action: ActionTypes) => {
  switch (action.type) {
    // case ActionTypesEnum.SET_ACTIVE:
    //   return { ...state, isActive: action.payload };
    case ActionTypesEnum.SET_STATUS:
      return { ...state, status: action.payload };
    case ActionTypesEnum.SET_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};
