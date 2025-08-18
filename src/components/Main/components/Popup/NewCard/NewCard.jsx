export default function NewCard() {
    return (
        <form className="popup__form" id="popupFormPlace">
            <input
                className="popup__input"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                minLength="2"
                maxLength="30"
                required
            />
            <p className="title-error"></p>

            <input
                className="popup__input"
                type="url"
                id="url"
                name="url"
                placeholder="Enlace a la imagen"
                required
            />
            <p className="url-error"></p>

            <button id="popupButtonAdd" className="popup__button">Guardar</button>



        </form>
    );
}