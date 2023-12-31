import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorite, setFavorite] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    //  fetch('https://65776b85197926adf62e4406.mockapi.io/items')
    //    .then((res) => {
    //      return res.json();
    //    })
    //    .then((json) => {
    //      setItems(json);
    //    });

    async function fetchData() {
      const cartResponse = await axios.get('https://65776b85197926adf62e4406.mockapi.io/cart');
      const favoritesResponse = await axios.get(
        'https://658337464d1ee97c6bcdaa98.mockapi.io/favorites',
      );
      const itemsResponse = await axios.get('https://65776b85197926adf62e4406.mockapi.io/items');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorite(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      //Переводим все в Number, ибо сравниваются айди написанные как строчка и как цисло, поэтому приводим все к числу
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://65776b85197926adf62e4406.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://65776b85197926adf62e4406.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
    }

    //  axios.post('https://65776b85197926adf62e4406.mockapi.io/cart', obj);
    //  setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65776b85197926adf62e4406.mockapi.io/cart/${id}`);
    console.log(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  //try and catch нужен, чтобы отловить ошибку в async..await
  const onAddToFavorite = async (obj) => {
    try {
      if (favorite.find((obj) => obj.id === obj.id)) {
        axios.delete(`https://658337464d1ee97c6bcdaa98.mockapi.io/favorites/${obj.id}`);
        // setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://658337464d1ee97c6bcdaa98.mockapi.io/favorites',
          obj,
        );
        setFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
    }
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    //все доп классы берутся из библиотеки marco-css
    //амперсанты, которые работают так: если слева true, то выполняется дальше код, справа. Если
    //отрицательно, то ничего не выполняется
    //exact- означает строго такой путь у Роуте (Route), перевод "именно"
    //(в reavt-router-dom v6 это уже дефолт, не пишем, в других версиях пишем)
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchValue={onChangeSearchValue}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />
          }></Route>

        <Route
          path="/favorites"
          element={<Favorites items={favorite} onAddToFavorite={onAddToFavorite} />}></Route>
      </Routes>
      {/* <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="/img/remove.svg"
                alt="remove"
              />
            )}
            <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div> */}
    </div>
  );
}

export default App;
