import { useDispatch } from "react-redux";

import { AppDispatch } from "../../model/types";

export const useAppDispatch: () => AppDispatch = useDispatch;
