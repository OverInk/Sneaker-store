function Drawer({ onClose, onRemove, items }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h3 className="mb-30 d-flex justify-between">
          Корзина <img onClick={onClose} className="cu-p" src="/img/remove.svg" alt="remove" />{' '}
        </h3>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
              </button>
            </div>
          </div>
        ) : (
          <div class="d-flex align-center justify-center">
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={() => onClose()}>Вернуться назад</button>
          </div>
        )}

        {/* <div class="d-flex align-center justify-center">
				<h2>Корзина пустая</h2>
				<p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
				<button>
					Вернуться назад
				</button>
			</div>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
                className="removeBtn"
                src="/img/remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div> */}

        {/* <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
          </button>
        </div> */}
      </div>
    </div>
  );
}
export default Drawer;
