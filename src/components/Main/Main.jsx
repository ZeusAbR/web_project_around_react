import { useState } from "react";
import Popup from "./components/Popup/Popup";

  


function Main() {
  const [popup, setPopup] = useState(null);
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__superposition">
            <img src="./images/profile" alt="fotografia avatar" className="profile__picture" />
            <img
              src="./images/pencil.png"
              alt="edit pencil"
              className="profile__pencil"
            />
            <div className="profile__gradient"></div>
          </div>
          <div className="profile__info">
            <div className="profile__details">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <p className="profile__description">Estudiante/TripleTen</p>
            </div>
            <div className="profile__edit">
              <img src="./images/EditButton.png" alt="edit button" />
            </div>
          </div>
        </div>
        <div className="profile__add">
          <img
            className="profile__add-button"
            src="./images/AddButton.png"
            alt="add button"
          />
        </div>
      </section>
      
      <section className="elements">
        <template className="template">
          <div className="card">
            <img className="card__image" src="" alt="" />
            <div className="card__element">
              <h2 className="card__name"></h2>
              <img
                id="like-button"
                className="card__vector"
                src="./images/Vectorunlike.png"
                alt="like button"
              />
              <div className="card__trash">
                <img
                  id="trash-button"
                  className="card__trashy"
                  src="./images/trashIcon.png"
                  alt="trash button"
                />
              </div>
            </div>
          </div>
        </template>
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
