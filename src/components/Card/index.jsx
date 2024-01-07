import React from 'react';
import styles from './Card.module.scss';

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  added = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Krossi" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/check-mark.svg' : '/img/plus.svg'}
          alt="плюсик"
        />
      </div>
    </div>
  );
}

export default Card;
