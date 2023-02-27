import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectTasksIds, fetchTasks } from "../../model";
import { useAppDispatch } from "shared/lib";

export const useLoadTasks = () => {
  const tasks = useSelector(selectTasksIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!tasks.length) {
      dispatch(fetchTasks());
    }
  }, []);
};
