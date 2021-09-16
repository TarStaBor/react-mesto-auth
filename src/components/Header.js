import logo from "../images/header-logo.svg";
import { Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header({ userEmail }) {
  const history = useHistory();

  function signOut() {
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <>
      <header className="header">
        <img src={logo} className="header__logo" alt="Логотип 'Mesto Russia'" />
        <Route path="/sign-in">
          <Link className="header__link link-opacity" to="/sign-up">
            Регистрация
          </Link>
        </Route>

        <Route path="/sign-up">
          <Link className="header__link link-opacity" to="/sign-in">
            Войти
          </Link>
        </Route>

        <Route exact path="/">
          <h2 className="header__link" style={{ marginLeft: "auto", marginRight: "24px" }}>
            {userEmail}
          </h2>
          <Link className="header__link link-opacity" onClick={signOut} style={{ color: "#A9A9A9" }} to="/sign-in">
            Выйти
          </Link>
        </Route>
      </header>
    </>
  );
}

export default Header;
