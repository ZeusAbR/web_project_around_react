export default function EditAvatar() {
    return (<form className="popup__form" id="popupFormAvatar">
          <input
            className="popup__input"
            type="url"
            id="url"
            name="url"
            placeholder="Enlace a la imagen"
            required
          />
          <p className="url-error"></p>
          <button id="popupButtonAvatar" className="popup__button">Guardar</button>
        </form>
    )
}