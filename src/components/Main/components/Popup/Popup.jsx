export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const {title, children} = props;
  return (
    <div class="popup" id="popup-add">
      <div class="popup__overlay" id="popupOverlayAdd"></div>

      <div class="popup__container">
        <img
          class="popup__close"
          id="popup-close-add"
          src="./images/CloseIcon.png"
          alt="close icon"
        />
        <h2 class="popup__title">{title}</h2>

        {children}
      </div>
    </div>
    
  )
}