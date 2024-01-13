import React from 'react';
import AppContext from '../context';

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div class="empty-drawer">
      <h2>{title}</h2>
      <p class="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)}>Вернуться назад</button>
    </div>
  );
};

export default Info;
