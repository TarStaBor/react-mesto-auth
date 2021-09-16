//Авторизация
import React, { useState } from "react";
import InfoTooltip from "./InfoTooltip";
import { Link, Redirect } from "react-router-dom";
import * as Auth from "./Auth";

function Register({ isInfoTooltipOpen, onPost, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisiblePassword, setisVisiblePassword] = useState("password");

  function handleVisibleChange() {
    setisVisiblePassword(isVisiblePassword === "password" ? "text" : "password");
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Auth.register(email, password).then((res) => {
      if (res) {
        onPost(true);
        setIsSuccess(true);
      } else {
        onPost(true);
        setIsSuccess(false);
        setEmail("");
        setPassword("");
      }
    });
  }

  return (
    <>
      <section className="authorization">
        <h2 className="authorization__title">Регистрация</h2>

        <form name="" action="#" className="authorization__form" onSubmit={handleSubmit} noValidate>
          <input
            id="email"
            className="authorization__input"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="off"
            minLength="2"
            maxLength="40"
            required
          />

          <input
            id="password"
            name="password"
            type={isVisiblePassword}
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
            className="authorization__input"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
          />
          <h2
            className="authorization__registered link-opacity"
            style={{ textAlign: "center" }}
            onClick={handleVisibleChange}
          >
            Показать пароль
          </h2>

          <button type="submit" className="authorization__button link-opacity save-profile">
            Зарегистрироваться
          </button>
        </form>
        <Link to="/sign-in" className="authorization__registered" href="#">
          Уже зарегистрированы? Войти
        </Link>
      </section>
      {isSuccess && !isInfoTooltipOpen && <Redirect to="sign-in" />}
      <InfoTooltip isInfoTooltipOpen={isInfoTooltipOpen} isSuccess={isSuccess} onClose={onClose} />
    </>
  );
}
export default Register;
