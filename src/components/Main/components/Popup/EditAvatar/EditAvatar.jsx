import { useState, useContext } from 'react';

import CurrentUserContext from '../../../../../contexts/CurrentUserContext';

export default function EditAvatar({ handleClosePopup }) {
  const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  const [avatar, setAvatar] = useState(currentUser.avatar); // Agrega la variable de estado para avatar

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value); // Actualiza avatar cuando cambie la entrada
  };
  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatar/* El valor de la entrada que obtuvimos utilizando la ref  */,
    });

    handleClosePopup();
  }

  return (<form className="popup__form" id="popupFormAvatar" onSubmit={handleSubmit}>
    <input
      className="popup__input"
      type="url"
      id="url"
      name="url"
      placeholder="Enlace a la imagen"
      required
      value={avatar} // Vincula description con la entrada
      onChange={handleAvatarChange}
    />
    <p className="url-error"></p>
    <button id="popupButtonAvatar" className="popup__button">Guardar</button>
  </form>
  )
}