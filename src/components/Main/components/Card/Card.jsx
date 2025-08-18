export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <div className="card">
      <img className="card__image" src={link} alt=""
        onClick={() => props.showPopup(props.newImagePopup)} />
      <div className="card__element">
        <h2 className="card__name">{name}</h2>
        <img
          id="like-button"
          className="card__vector"
          src="./images/Vectorunlike.png"
          alt="like button"
        />
        <div className="card__trash">
          <img
            id="trash-button"
            className="card__trashy"
            src="./images/trashIcon.png"
            alt="trash button"
          />
        </div>
      </div>
    </div>
  );
}