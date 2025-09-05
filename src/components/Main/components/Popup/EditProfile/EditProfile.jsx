import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditProfile({ handleClosePopup }) {
    const { currentUser, handleUpdateUser } = useContext(CurrentUserContext); // Obtiene el objeto currentUser

    const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
    const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

    const handleNameChange = (event) => {
        setName(event.target.value); // Actualiza name cuando cambie la entrada
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value); // Actualiza description cuando cambie la entrada
    };
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios

        handleUpdateUser({ name, about: description }); // Actualiza la información del usuario

        handleClosePopup();
    };
    return (

        <form className="popup__form" id="popupFormPerfil" onSubmit={handleSubmit} >
            <input
                className="popup__input"
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                minLength="2"
                maxLength="40"
                required
                value={name} // Vincula name con la entrada
                onChange={handleNameChange} // Agrega el controlador onChange
            />
            <p className="name-error" id="owner-name-error"></p>
            <input
                className="popup__input"
                type="text"
                id="info"
                name="info"
                placeholder="Acerca de mi"
                minLength="2"
                maxLength="200"
                required
                value={description} // Vincula description con la entrada
                onChange={handleDescriptionChange} // Agrega el controlador onChange
            />
            <p className="info-error" id="owner-description-error"></p>

            <button id="popupButtonProfile" className="popup__button">Guardar</button>
        </form>

    )
}