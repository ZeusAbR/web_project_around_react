export default function EditProfile() {
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
            />
            <p className="name-error"></p>
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