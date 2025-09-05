import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";


export default function NewCard({ handleClosePopup }) {
    const { handleAddPlaceSubmit } = useContext(CurrentUserContext); // Obtiene el objeto currentUser

    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        handleAddPlaceSubmit({
            name: name,
            link: link
        });
        handleClosePopup();
    }



    return (
        <form className="popup__form" id="popupFormPlace" onSubmit={handleSubmit}>
            <input
                className="popup__input"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                minLength="2"
                maxLength="30"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p className="title-error"></p>

            <input
                className="popup__input"
                type="url"
                id="url"
                name="url"
                placeholder="Enlace a la imagen"
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <p className="url-error"></p>

            <button id="popupButtonAdd" className="popup__button">Guardar</button>



        </form>
    );
}