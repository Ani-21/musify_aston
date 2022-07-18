import React, { useState } from "react";
import { AuthForm, Container } from "./Auth.components";
// import { onLogin } from "./auth.api";

const Login = () => {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const getUsername = localStorage.getItem("username");
  const getPassword = localStorage.getItem("password");

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <AuthForm onSubmit={onLogin}>
      <label htmlFor="username">Имя</label>
      <input
        placeholder="Введите имя"
        value={username}
        onChange={(event) =>
          setCredentials({
            username: event.target.value,
            password,
          })
        }
      />
      <label htmlFor="password">Пароль</label>
      <input
        placeholder="Введите пароль"
        type="password"
        value={password}
        onChange={(event) =>
          setCredentials({
            username,
            password: event.target.value,
          })
        }
      />
      <button type="submit">Войти</button>
      {error.length > 0 && <p>{error}</p>}
    </AuthForm>
  );
};

export default Login;
