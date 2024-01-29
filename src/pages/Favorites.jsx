import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';
import { NoFavorite } from '../components/NoFavorite/NoFavorite';

function Favorites({ onAddToFavorite }) {
  const { favorite, setFavorite } = React.useContext(AppContext);

  if (!setFavorite) {
    return <NoFavorite />;
  }

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorite.map((item) => (
          <Card key={item.id} favorited={true} onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
