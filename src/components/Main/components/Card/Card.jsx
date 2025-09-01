import unlikeVectorImage from '../../../../images/Vectorunlike.png'
import likeVectorImage from '../../../../images/Vectorlike.png'
import { useContext } from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import trashIconImage from '../../../../images/trashIcon.png'

export default function Card(props) {
  const { currentUser } = useContext(CurrentUserContext);
  // if (!currentUser) {
  //   return null; // Or some loading indicator/fallback UI
  // }
  const { name, link } = props.card;
  const isLiked = props.card.isLiked;

  const cardLikeButtonImage = isLiked ? likeVectorImage : unlikeVectorImage;
  const { handleCardLike } = props


  const isOwn = props.card.owner === currentUser._id;
  const cardDeleteButtonImage = `card__trashy ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`;
  const { handleCardDelete } = props


  const handleLikeClick = () => {
    handleCardLike(props.card);
  };

  const handleDeleteClick = () => {
    handleCardDelete(props.card);
  };

  return (
    <div className="card">
      <img className="card__image" src={link} alt=""
        onClick={() => props.showPopup(props.newImagePopup)} />
      <div className="card__element">
        <h2 className="card__name">{name}</h2>
        <img
          id="like-button"
          className="card__vector"
          src={cardLikeButtonImage}
          alt="like button"
          onClick={handleLikeClick}
        />
        <div className="card__trash">
          <img
            id="trash-button"
            className={cardDeleteButtonImage}
            src={trashIconImage}
            alt="trash button"
            onClick={handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
}