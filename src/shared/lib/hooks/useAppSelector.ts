import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState } from "../../model/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
