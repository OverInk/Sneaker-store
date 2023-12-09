import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickfavorite}>
        <img src="/img/heart-unliked.svg" alt="heart unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Krossi" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={styles.button} onClick={props.onClickPlus}>
          <img width={11} height={11} src="/img/plus.svg" alt="плюсик" />
        </button>
      </div>
    </div>
  );
}

export default Card;