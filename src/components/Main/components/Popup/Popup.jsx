export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;
  return (
    <div className="popup" id="popup-add">
      <div className="popup__overlay" id="popupOverlayAdd"></div>

      <div className={`popup__container ${
          !title ? "popup__container_content_image" : ""
        }`}>
        <img
          className="popup__close"
          id="popup-close-add"
          src="./images/CloseIcon.png"
          alt="close icon"
          onClick={onClose} 

        />

        {title &&<h2 className="popup__title">{title}</h2>}

        {children}
      </div>
    </div>

  )
}