import { Agreement } from "./agreement";

import { useUserFormReducer, signUp } from "entities/user";
import { Button, Form, FormInput, Title } from "shared/ui";

import { useAppSelector, validation, useAppDispatch } from "shared/lib";

export const RegisterForm = () => {
  const [data, stateDispatch] = useUserFormReducer();
  const { status, error } = useAppSelector((state) => state.auth);
  const appDispatch = useAppDispatch();

  const handleSubmit = () => {
    const { username, email, password } = data;
    appDispatch(
      signUp({
        username: username.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Form
      className="user-form"
      onChange={validation(stateDispatch)}
      onSubmit={handleSubmit}
    >
      <Title>Регистрация</Title>
      {error}
      <FormInput
        input={{
          name: "username",
          type: "text",
          placeholder: "Ваше имя",
          onChange: validation(stateDispatch),
          onBlur: validation(stateDispatch),
        }}
        error={data?.username?.error}
      />
      <FormInput
        input={{
          name: "email",
          type: "email",
          placeholder: "E-mail",
          onChange: validation(stateDispatch),
          onBlur: validation(stateDispatch),
        }}
        error={data?.email?.error}
      />
      <FormInput
        input={{
          name: "password",
          type: "password",
          placeholder: "Придумайте пароль",
          onChange: validation(stateDispatch),
          onBlur: validation(stateDispatch),
        }}
        error={data?.password?.error}
      />
      <Agreement />
      <Button
        isLoading={status === "loading"}
        disabled={data.isDisabled.value === "true"}
        className="button"
        data-valid={true}
      >
        Зарегестрироваться
      </Button>
    </Form>
  );
};
