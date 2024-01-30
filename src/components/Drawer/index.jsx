import React from 'react';
import axios from 'axios';
import Info from '../Info/Info';
import AppContext from '../../context';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

// import { resolve } from 'path';

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items, opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();

  //   const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  //   const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://658337464d1ee97c6bcdaa98.mockapi.io/orders', {
        items: cartItems,
      });
      // await axios.put('https://65776b85197926adf62e4406.mockapi.io/cart', []);
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      // for (let i = 0; i < cartItems.length; i++) {
      //   const item = cartItems[i];
      //   await axios.delete(
      //     'https://658337464d1ee97c6bcdaa98.mockapi.io/orders' + item.onClickOrder,
      //   );
      //   await delay(1000);
      // }
    } catch (error) {
      alert('Не удалось создать заказ');
    }

    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h3 className="mb-30 d-flex justify-between">
          Корзина <img onClick={onClose} className="cu-p" src="/img/remove.svg" alt="remove" />{' '}
        </h3>

        {items.length > 0 ? (
          <div className="flex-drawer">
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
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} руб. </b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
              </button>
            </div>
          </div>
        ) : (
          <Info
            image={isOrderComplete ? '/img/order.svg' : '/img/box.svg'}
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} будет передан курьерской службе`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
            }
          />
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
