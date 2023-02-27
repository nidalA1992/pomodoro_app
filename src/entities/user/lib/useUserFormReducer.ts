import { useFormGenericReducer } from "shared/lib";
import { IAuthData } from "../model/types";

export const useUserFormReducer = () => {
  const initialState: IAuthData = {
    username: { value: "", error: "" },
    password: { value: "", error: "" },
    email: { value: "", error: "" },
    isDisabled: { value: "true", error: "" },
  };

  return useFormGenericReducer<IAuthData>(initialState);
};
