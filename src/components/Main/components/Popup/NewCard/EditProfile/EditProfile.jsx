    export default function EditProfile() {
  return (

    <form class="popup__form" id="popupFormPerfil">
        <input
            class="popup__input"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            minlength="2"
            maxlength="40"
            required
        />
        <p class="name-error"></p>
        <input
            class="popup__input"
            type="text"
            id="info"
            name="info"
            placeholder="Acerca de mi"
            minlength="2"
            maxlength="200"
            required
        />
        <p class="info-error"></p>

        <button id="popupButtonProfile" class="popup__button">Guardar</button>
    </form>
    
  )}