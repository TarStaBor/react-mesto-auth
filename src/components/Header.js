import logo from "../images/header-logo.svg";
import { Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="header__logo" alt="Логотип 'Mesto Russia'" />
        <Route path="/sign-in">
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        </Route>

        <Route path="/sign-up">
          <Link className="header__link" to="/sign-in">
            Войти
          </Link>
        </Route>
      </header>
    </>
  );
}

export default Header;
