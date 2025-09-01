import { useEffect, useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup";

import { api } from "../../utils/api";


function Main() {

  const [popup, setPopup] = useState(null);
  console.log(popup)
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newAvatarPopup = { title: "Foto de perfil", children: <EditAvatar /> };
  const newProfilePopup = { title: "Nombre de perfil", children: <EditProfile /> };
  const newImagePopup = { children: <ImagePopup /> }
  const [cards, setCards] = useState([])
  // -------
  const currentUser = useContext(CurrentUserContext);


  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData)
      })
      .catch((error) => {
        console.error('Error al obtener las tarjetas:', error);
      });
  }, []);

  async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;
    if (isLiked === true) {
      await api.dislikeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      }).catch((error) => console.error(error));
    }
    else {
      await api.likeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      }).catch((error) => console.error(error));
      // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    }
  }
  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    } catch (error) {
      console.error('Error al eliminar la tarjeta:', error);
    }
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__superposition">
            <img src={currentUser?.avatar} alt="Avatar del usuario" className="profile__picture" />
            <img
              src="./images/pencil.png"
              alt="edit pencil"
              className="profile__pencil"
              onClick={() => handleOpenPopup(newAvatarPopup)}
            />
            <div className="profile__gradient"></div>
          </div>
          <div className="profile__info">
            <div className="profile__details">
              <h1 className="profile__name">{currentUser?.name}</h1>
              <p className="profile__description">{currentUser?.about}</p>
            </div>
            <div className="profile__edit">
              <img src="./images/EditButton.png" alt="edit button"
                onClick={() => handleOpenPopup(newProfilePopup)}
              />

            </div>
          </div>
        </div>
        <div className="profile__add">
          <img
            className="profile__add-button"
            src="./images/AddButton.png"
            alt="add button"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </div>
      </section>
      {/* carta--------------- */}
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} showPopup={handleOpenPopup} newImagePopup={newImagePopup} handleCardLike={handleCardLike} handleCardDelete={handleCardDelete} />
        ))}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  )
}

export default Main
