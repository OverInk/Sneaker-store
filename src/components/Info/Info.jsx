import React from 'react';
import AppContext from '../../context';

import styles from './Info.module.scss';

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div class="empty-drawer">
      <h2>{title}</h2>
      <p class="opacity-6">{description}</p>
      <button className={styles.greenButton} onClick={() => setCartOpened(false)}>
        <p>Вернуться назад</p>
      </button>
    </div>
  );
};

export default Info;
