import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';
export default function EditProfile() {

    const currentUser = useContext(CurrentUserContext); // Obtiene el objeto currentUser

    const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
    const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

    const handleNameChange = (event) => {
        setName(event.target.value); // Actualiza name cuando cambie la entrada
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value); // Actualiza description cuando cambie la entrada
    };
    return (

        <form className="popup__form" id="popupFormPerfil">
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
            {/* <p className="name-error" id="owner-name-error"></p> */}
            <input
                className="popup__input"
                type="text"
                id="info"
                name="info"
                placeholder="Acerca de mi"
                minLength="2"
                maxLength="200"
                required
            />
            <p className="info-error"></p>

            <button id="popupButtonProfile" className="popup__button">Guardar</button>
        </form>

    )
}