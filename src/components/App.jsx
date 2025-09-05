import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from "react";

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import { api } from "../utils/api";
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {

  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  //--------

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

  function handleAddPlaceSubmit(cardData) {
    return api.addNewCard(cardData.name, cardData.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((error) => {
        console.error('Error al agregar la tarjeta:', error);
      });
  }
  //---------

  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo)
      })
      .catch((error) => {
        console.error('Error de user :', error);
      });
  }, []);
  // -----
  const handleUpdateUser = (data) => {
    (async () => {
      await api.editProfile(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  // -----
  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.updateAvatarPicture(data.avatar).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };
  //---------


  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

      </div>

    </CurrentUserContext.Provider>
  )
}

export default App
