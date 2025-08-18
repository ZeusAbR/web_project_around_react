export default function ImagePopup(props) {
    return (
        <>
            <img className="popup__image" src={props.src} alt="" />
            <p className="popup__parrafo">{props.text}</p>
        </>
    )
}
