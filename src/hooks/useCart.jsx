import React from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return { cartItems, setCartItems, totalPrice };
};

// тут просто export const.., без в окнце export default,
// потому что некоторые редакторы плохо работают с default
// и еще это связанно со сборкой компонента
// export особенно хорош для WebPack
