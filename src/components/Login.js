import React, { useState } from "react";
import InfoTooltip from "./InfoTooltip";
import { useHistory } from "react-router-dom";
import * as Auth from "./Auth";

function Login({ isInfoTooltipOpen, onPost, onLoggedIn, setUserEmail, onClose }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    Auth.authorize(email, password).then((res) => {
      if (res) {
        setUserEmail(email);
        onLoggedIn(true);
        history.push("/");
      } else {
        onPost(true);
        setEmail("");
        setPassword("");
      }
    });
  }

  return (
    <>
      <section className="authorization">
        <h2 className="authorization__title">Вход</h2>

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
            Войти
          </button>
        </form>
      </section>
      <InfoTooltip isInfoTooltipOpen={isInfoTooltipOpen} isSuccess={false} onClose={onClose} />
    </>
  );
}
export default Login;
