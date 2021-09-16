import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupAvatar from "./PopupAvatar";
import { CurrentUserContext } from "../context/currentUserContext";
import { Route, Switch, useHistory } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import * as Auth from "./Auth";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const history = useHistory();

  // Получаем набор карточек и информацию о пользователе
  useEffect(() => {
    Promise.all([api.getListCard(), api.getUserInfo()])
      .then(([cards, userData]) => {
        setCards(cards);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Проверяем авторизацию на сайте
  useEffect(() => {
    if (localStorage.getItem("token")) {
      Auth.getContent(localStorage.token)
        .then((data) => {
          setUserEmail(data.data.email);
          setLoggedIn(true);
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [history]);

  // Добавление лайка
  function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Удаление карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => (item._id === card._id ? null : item)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Изменение профайла
  function handleUpdateUser({ name, about }) {
    api
      .patchUserInfo({ name, about })
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Изменение аватара
  function handleUpdateAvatar(url) {
    const data = { avatar: url };
    api
      .patchAvatar(data)
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Добавление карточки
  function handleAddPlaceSubmit(data) {
    api
      .postCard(data)
      .then((response) => {
        setCards([response, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleInfoTooltipClick() {
    setisInfoTooltipOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setisInfoTooltipOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <Header userEmail={userEmail} />

          <Switch>
            <ProtectedRoute
              component={Main}
              exact
              path="/"
              loggedIn={loggedIn}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            ></ProtectedRoute>

            <Route path="/sign-up">
              <Register
                isInfoTooltipOpen={isInfoTooltipOpen}
                onPost={handleInfoTooltipClick}
                onClose={closeAllPopups}
              />
            </Route>

            <Route path="/sign-in">
              <Login
                isInfoTooltipOpen={isInfoTooltipOpen}
                onPost={handleInfoTooltipClick}
                onLoggedIn={setLoggedIn}
                setUserEmail={setUserEmail}
                onClose={closeAllPopups}
              />
            </Route>
          </Switch>

          <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
