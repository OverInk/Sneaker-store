import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
   //  fetch('https://65776b85197926adf62e4406.mockapi.io/items')
   //    .then((res) => {
   //      return res.json();
   //    })
   //    .then((json) => {
   //      setItems(json);
   //    });

		axios.get('https://65776b85197926adf62e4406.mockapi.io/items').then( res => {
			setItems(res.data)
		});
  }, []);

  const onAddToCart = (obj) => {
	axios.get('https://65776b85197926adf62e4406.mockapi.io/items').then( res => {
			setItems(res.data)
		});
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    //все доп классы берутся из библиотеки marco-css
    //амперсанты, которые работают так: если слева true, то выполняется дальше код, справа. Если
    //отрицательно, то ничего не выполняется
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/remove.svg" alt="remove" />}
            <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
