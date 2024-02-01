import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Bookmarks.module.scss';
import AppContext from '../../context';

export function NoFavorite() {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={styles.fullMarks}>
      <div className={styles.boxMarks}>
        <img src="/img/bigeyessmile.svg" alt="" />
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
