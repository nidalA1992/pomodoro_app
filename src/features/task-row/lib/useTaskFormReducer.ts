import { useFormGenericReducer } from "shared/lib";
import type { FormField } from "shared/model";

interface ITaskData {
  task: FormField;
  isDisabled: FormField;
}

export const useTaskFormReducer = () => {
  const initialState: ITaskData = {
    task: { value: "", error: "" },
    isDisabled: { value: "true", error: "" },
  };

  return useFormGenericReducer<ITaskData>(initialState);
};
