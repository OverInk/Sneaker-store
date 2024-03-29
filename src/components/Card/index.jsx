import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({
  id,
  parentId,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  //   const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const objA = { id, parentId: id, imageUrl, title, price };

  const onClickPlus = () => {
    onPlus(objA);
    //  setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite(objA);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={600}
          height={200}
          viewBox="0 0 600 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="-8" y="750" rx="3" ry="3" width="380" height="6" />
          <rect x="0" y="0" rx="9" ry="9" width="150" height="90" />
          <rect x="0" y="100" rx="4" ry="4" width="150" height="20" />
          <rect x="0" y="134" rx="5" ry="5" width="100" height="32" />
          <rect x="111" y="132" rx="5" ry="5" width="37" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="Krossi" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? '/img/check-mark.svg' : '/img/plus.svg'}
                alt="плюсик"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
