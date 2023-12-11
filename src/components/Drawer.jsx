function Drawer({ onClose }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h3 className="mb-30 d-flex justify-between">
          Корзина <img onClick={onClose} className="cu-p" src="/img/remove.svg" alt="remove" />{' '}
        </h3>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            {/* <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/2.svg"
              alt="sneaker "
            /> */}
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.svg)' }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 990 руб.</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.svg)' }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 990 руб.</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="remove" />
          </div>
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
    </div>
  );
}
export default Drawer;
