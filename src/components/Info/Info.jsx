import React from 'react';
import AppContext from '../../context';

import styles from './Info.module.scss';

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div class="empty-drawer h100p d-flex align-center justify-center">
      <img src={image} alt="Либо пустая коробка, либо галочка со списком" />
      <h2>{title}</h2>
      <p class="opacity-6">{description}</p>
      <button className={styles.greenButton} onClick={() => setCartOpened(false)}>
        Вернуться назад
        <img src="/img/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Info;
