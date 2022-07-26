import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
