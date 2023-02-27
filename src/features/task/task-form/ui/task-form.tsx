import React from "react";
import type { FormEvent } from "react";

import { Button } from "shared/ui";
import { Form } from "shared/ui";
import { FormInput } from "shared/ui";
import { useAppDispatch, validation } from "shared/lib";
import { fetchAddTask } from "entities/task";

import { useTaskFormReducer } from "../hooks/useTaskFormReducer";

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
      <Button
        className="button"
        data-valid={true}
        disabled={data.isDisabled.value === "true"}
      >
        Добавить
      </Button>
    </Form>
  );
};
