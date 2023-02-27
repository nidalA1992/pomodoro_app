import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib";

import { selectTasksIds } from "../model/selectors";
import { fetchTasks } from "../model/async-thunks";

export const useLoadTasks = () => {
  const tasks = useSelector(selectTasksIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!tasks.length) {
      dispatch(fetchTasks());
    }
  }, []);
};
