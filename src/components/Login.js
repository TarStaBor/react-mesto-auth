//Авторизация
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword("\u2022".repeat(e.target.value.length));
  }

  return (
    <section className="authorization">
      <h2 className="authorization__title">Вход</h2>

      <form
        name=""
        action="#"
        className="authorization__form"
        //onSubmit={}
        noValidate
      >
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
        <button
          type="submit"
          className="authorization__button link-opacity save-profile"
        >
          Войти
        </button>
      </form>
    </section>
  );
}
export default Login;
