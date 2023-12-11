import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/1.svg',
  },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: '/img/sneakers/2.svg' },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8999,
    imageUrl: '/img/sneakers/3.svg',
  },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.svg' },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    //все доп классы берутся из библиотеки marco-css
    <div className="wrapper clear">
      //амперсанты, которые работают так: если слева true, то выполняется дальше код, справа. Если
      отрицательно, то ничего не выполняется
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={() => console.log('Нажали на плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
