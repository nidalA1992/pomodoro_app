import React, { useState } from "react";

import { RegisterForm } from "features/user/registration";
import { LoginForm } from "features/user/login";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      {isSignUp ? <RegisterForm /> : <LoginForm />}
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Войти" : "Зарегестрироваться"}
      </button>
    </div>
  );
};

export default AuthPage;
