//Авторизация
import React, { useState } from "react";
import InfoTooltip from "./InfoTooltip";
import { Link, Redirect } from "react-router-dom";
import * as Auth from "./Auth";

function Register(onClose) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    // setPassword("\u2022".repeat(e.target.value.length));
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Auth.register(email, password).then((res) => {
      if (res) {
        setIsSuccess(true);
        setisInfoTooltipOpen(true);
      } else {
        setIsSuccess(false);
        setisInfoTooltipOpen(true);
      }
      console.log(isSuccess + " статус попапа");
    });
  }

  return (
    <>
      <section className="authorization">
        <h2 className="authorization__title">Регистрация</h2>

        <form name="" action="#" className="authorization__form" onSubmit={handleSubmit} noValidate>
          <input
            id="name-input"
            className="authorization__input"
            name="name"
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
            id="job-input"
            name="about"
            type="text"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
            className="authorization__input"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
          />
          <button type="submit" className="authorization__button link-opacity save-profile">
            Зарегистрироваться
          </button>
        </form>
        <Link to="/sign-in" className="authorization__registered" href="#">
          Уже зарегистрированы? Войти
        </Link>
      </section>
      {isSuccess && <Redirect to="sign-in" />}
      <InfoTooltip isOpen={isInfoTooltipOpen} isSuccess={isSuccess} onClose={onClose} />
    </>
  );
}
export default Register;
