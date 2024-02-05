import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';
import { useCart } from '../hooks/useCart';

function Header({ onClickCart }) {
  //   const { cartItems } = React.useContext(AppContext);
  const { totalPrice } = useCart();

  //   console.log(cartItems.reduce((sum, obj) => obj.price + sum, 0));
  // метод reduce нужен длчя того, чтобы пробежаться по каждому значению в массиве
  // и вытащить одну переменную и задать первоначальное значенине
  // arr.reduce(() => {}, 0) === arr.reduce((sum, obj) => obj.price + sum, 0)
  //   const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo_header_left.svg" alt="Кроссовки лого" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React OverInk</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 d-flex align-center cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="корзина" />
          <span style={{ marginLeft: 10 }}>{totalPrice} рублей</span>
        </li>
        <Link to="/favorites">
          <li className="mr-20 cu-p d-flex flex-row">
            <img width={18} height={18} src="/img/heart.svg" alt="Heart" />
            <p style={{ paddingLeft: 10 }}>Закладки</p>
          </li>
        </Link>
        <Link to="/orders">
          <li className="mr-20 cu-p d-flex flex-row">
            <img width={18} height={18} src="/img/user.svg" alt="User" />
            <p style={{ paddingLeft: 10 }}>Заказы</p>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
