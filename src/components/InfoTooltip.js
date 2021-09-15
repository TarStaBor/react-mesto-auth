import React from "react";
import success from "../images/success.svg";
import fail from "../images/fail.svg";

function InfoTooltip({ isOpen, isSuccess, onClose }) {
  console.log(isSuccess + " попап должен быть открыт");
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть попап редактирования профиля"
          className="popup__close-button link-opacity"
          onClick={onClose}
        ></button>
        <img src={isSuccess ? success : fail} style={{ paddingTop: 60 }} />
        <h2
          className="popup__title"
          style={{ textAlign: "center", padding: 0, marginLeft: 0, marginBottom: 60, marginTop: 32 }}
        >
          {isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
