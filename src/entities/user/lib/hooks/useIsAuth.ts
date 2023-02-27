import { useEffect } from "react";

import { useAppDispatch } from "shared/lib";
import { AuthLocalStorage } from "../utils/AuthLocalStorage";
import { setUser } from "../../model";

export const useIsAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = AuthLocalStorage.getUser();
    if (user) {
      dispatch(setUser(user));
    }
  }, []);
};
