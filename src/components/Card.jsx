function Card(props) {

	const onClickPlus = (a, b) => {
		console.log(a, b)
	}

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="heart unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Krossi" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={onClickPlus} className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="плюсик" />
        </button>
      </div>
    </div>
  );
}

export default Card;
