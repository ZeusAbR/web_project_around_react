import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup";

function Main() {

  const [popup, setPopup] = useState(null);
  console.log(popup)
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newAvatarPopup = { title: "Foto de perfil", children: <EditAvatar /> };
  const newProfilePopup = { title: "Nombre de perfil", children: <EditProfile /> };
  const newImagePopup = { children: <ImagePopup /> }
  const cards = [
    {
      isLiked: false,
      _id: '5d1f0611d321eb4bdcd707dd',
      name: 'Yosemite Valley',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:10:57.741Z',
    },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707de',
      name: 'Lake Louise',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:11:58.324Z',
    },
  ];

  console.log(cards);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  } return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__superposition">
            <img src="./images/profile" alt="fotografia avatar" className="profile__picture" />
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
              <h1 className="profile__name">Jacques Cousteau</h1>
              <p className="profile__description">Estudiante/TripleTen</p>
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
          <Card key={card._id} card={card} showPopup={handleOpenPopup} newImagePopup={newImagePopup}/>
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
