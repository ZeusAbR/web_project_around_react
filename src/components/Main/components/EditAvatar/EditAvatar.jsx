export default function EditAvatar() {
    return (<form class="popup__form" id="popupFormAvatar">
          <input
            class="popup__input"
            type="url"
            id="url"
            name="url"
            placeholder="Enlace a la imagen"
            required
          />
          <p class="url-error"></p>
          <button id="popupButtonAvatar" class="popup__button">Guardar</button>
        </form>
    )
}