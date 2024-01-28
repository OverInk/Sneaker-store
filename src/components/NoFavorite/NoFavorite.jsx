import React from 'react';
import styles from './NoFavorite.module.scss';

export function NoFavorite() {
  return (
    <div className={styles.fullNoFav}>
      <div className={styles.boxNoFav}>
        <img src="/img/sadsmile.svg" alt="" />
        <div>Закладок нет</div>
        <p>Вы ничего не добавляли в закладки</p>
      </div>

      <button className={styles.greenButton}>
        <img src="/img/anti-arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
}
