import { validation, useAppDispatch, useAppSelector } from "shared/lib";
import { Button, Form, FormInput, Title } from "shared/ui";

import { signIn, useUserFormReducer } from "entities/user";

export const LoginForm = () => {
  const [data, stateDispatch] = useUserFormReducer();
  const { status, error } = useAppSelector((state) => state.auth);
  const appDispatch = useAppDispatch();

  const handleSubmit = () => {
    const { username, password } = data;
    appDispatch(signIn({ username: username.value, password: password.value }));
  };

  return (
    <Form
      className="user-form"
      onChange={validation(stateDispatch)}
      onSubmit={handleSubmit}
    >
      {error}
      <Title>Совсем чуть-чуть и можем начинать!</Title>
      <FormInput
        input={{
          name: "username",
          type: "text",
          placeholder: "Логин или Email",
          onChange: validation(stateDispatch),
          onBlur: validation(stateDispatch),
        }}
        error={data?.username?.error}
      />
      <FormInput
        input={{
          name: "password",
          type: "password",
          placeholder: "Пароль",
          onChange: validation(stateDispatch),
          onBlur: validation(stateDispatch),
        }}
        error={data?.password?.error}
      />
      <Button
        isLoading={status === "loading"}
        disabled={data.isDisabled.value === "true"}
        className="button"
        data-valid={true}
      >
        Войти
      </Button>
    </Form>
  );
};
