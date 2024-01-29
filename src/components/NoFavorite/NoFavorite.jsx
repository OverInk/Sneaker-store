import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NoFavorite.module.scss';
import AppContext from '../../context';
import Header from '../Header';

export function NoFavorite() {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={styles.fullNoFav}>
      <div className={styles.boxNoFav}>
        <img src="/img/sadsmile.svg" alt="" />
        <div>Закладок нет</div>
        <p>Вы ничего не добавляли в закладки</p>
      </div>

      <Link to="/">
        <button className={styles.greenButton}>
          <img src="/img/anti-arrow.svg" alt="arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
}
