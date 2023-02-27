import React from "react";
import type { FormEvent } from "react";

import { Form } from "shared/ui";
import { FormInput } from "shared/ui";
import { useAppDispatch, validation } from "shared/lib";
import { PrimaryButton } from "shared/ui/buttons";
import { fetchAddTask } from "entities/task";

import { useTaskFormReducer } from "../../lib/useTaskFormReducer";

export const TaskForm = () => {
  const [data, stateDispatch] = useTaskFormReducer();
  const appDispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    appDispatch(fetchAddTask(data?.task?.value));
    const form = e.currentTarget;
    if ("task" in form && form.task instanceof HTMLInputElement) {
      form.task.value = "";
    }
  };

  const isDisable = data.isDisabled.value === "true";

  return (
    <Form
      className="task-form"
      onSubmit={handleSubmit}
      onChange={validation(stateDispatch)}
    >
      <FormInput
        input={{
          name: "task",
          type: "text",
          placeholder: "Название задачи",
          onChange: validation(stateDispatch),
          onBlur: validation(stateDispatch),
        }}
        error={data?.task?.error}
      />
      <PrimaryButton disabled={isDisable}>Добавить</PrimaryButton>
    </Form>
  );
};
