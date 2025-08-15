export default function Main() {
    const [popup, setPopup] = useState(null);

    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    // crea el resto

    function handleOpenPopup(popup) {
        setPopup(popup);
    }
    function handleClosePopup() {
        setPopup(null);
    }
}

export default function NewCard() {
    return (
        <form className="popup__form" id="popupFormPlace">
            <input
                className="popup__input"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                minlength="2"
                maxlength="30"
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
            <button
                aria-label="Add card"
                className="profile__add-button"
                type="button"
                onClick={() => handleOpenPopup(newCardPopup)}


            />
            {popup && (
                <Popup
                    onClose={handleClosePopup}
                    title={popup.title}>
                    {popup.children}
                </Popup>
            )}</form>
    );
}