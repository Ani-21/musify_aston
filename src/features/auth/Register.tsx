import React, { useState } from "react";
import { AuthForm } from "./Auth.components";
// import { onRegister } from "./auth.api";

const Register = () => {
  const [{ username, password, repeatPassword }, setRegisterData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");
  const setUsername = localStorage.setItem(
    "username",
    JSON.stringify(username)
  );
  const setPassword = localStorage.setItem(
    "password",
    JSON.stringify(password)
  );

  const register = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== repeatPassword) setError("Пароли должны совпадать 😔");
  };

  return (
    <AuthForm onSubmit={register}>
      <label htmlFor="username">Имя</label>
      <input
        placeholder="Введите имя"
        value={username}
        name="username"
        onChange={(event) =>
          setRegisterData({
            username: event.target.value,
            password,
            repeatPassword,
          })
        }
      />
      <label htmlFor="password">Пароль</label>
      <input
        placeholder="Введите пароль"
        value={password}
        type="password"
        name="password"
        onChange={(event) =>
          setRegisterData({
            username,
            password: event.target.value,
            repeatPassword,
          })
        }
      />
      <label htmlFor="repeatPassword">Повторите пароль</label>
      <input
        placeholder="Повторите пароль"
        value={repeatPassword}
        type="password"
        name="repeatPassword"
        onChange={(event) =>
          setRegisterData({
            username,
            password,
            repeatPassword: event.target.value,
          })
        }
      />
      <button type="submit">Зарегистриорваться</button>
      {error.length > 0 && <p>{error}</p>}
    </AuthForm>
  );
};

export default Register;
