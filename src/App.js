import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(cartItems);

  React.useEffect(() => {
    //  fetch('https://65776b85197926adf62e4406.mockapi.io/items')
    //    .then((res) => {
    //      return res.json();
    //    })
    //    .then((json) => {
    //      setItems(json);
    //    });

    async function fetchData() {
      try {
        //в Promise all юудет выполняться каждый промис(promise)
        //где будет возвращаться массив. И в каждый элемент массива будет
        // заполняться данными из промиссов соотвественно(!)
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://65776b85197926adf62e4406.mockapi.io/cart'),
          axios.get('https://658337464d1ee97c6bcdaa98.mockapi.io/favorites'),
          axios.get('https://65776b85197926adf62e4406.mockapi.io/items'),
        ]);
        //   const cartResponse = await axios.get('https://65776b85197926adf62e4406.mockapi.io/cart');
        //   const favoritesResponse = await axios.get(
        //     'https://658337464d1ee97c6bcdaa98.mockapi.io/favorites',
        //   );
        //   const itemsResponse = await axios.get('https://65776b85197926adf62e4406.mockapi.io/items');

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorite(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных!');
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      //Переводим все в Number, ибо сравниваются айди написанные как строчка и как цисло, поэтому приводим все к числу
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(`https://65776b85197926adf62e4406.mockapi.io/cart/${obj.id}`);
      } else {
        axios.post('https://65776b85197926adf62e4406.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
      console.error(error);
    }

    //  axios.post('https://65776b85197926adf62e4406.mockapi.io/cart', obj);
    //  setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://65776b85197926adf62e4406.mockapi.io/cart/${id}`);
      console.log(id);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert('Ошибка при удалении из корзины!');
      console.error(error);
    }
  };

  //try and catch нужен, чтобы отловить ошибку в async..await
  const onAddToFavorite = async (obj) => {
    try {
      if (favorite.find((obj) => Number(obj.id) === Number(obj.id))) {
        axios.delete(`https://658337464d1ee97c6bcdaa98.mockapi.io/favorites/${obj.id}`);
        setFavorite((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'https://658337464d1ee97c6bcdaa98.mockapi.io/favorites',
          obj,
        );
        setFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
      console.error(error);
    }
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  //значение some если хоть одно будет true, то он вернет булевое значение true
  const isItemAdded = (id) => {
    console.log(cartItems, 222);
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    //все доп классы берутся из библиотеки marco-css
    //амперсанты, которые работают так: если слева true, то выполняется дальше код, справа. Если
    //отрицательно, то ничего не выполняется
    //exact- означает строго такой путь у Роуте (Route), перевод "именно"
    //(в reavt-router-dom v6 это уже дефолт, не пишем, в других версиях пишем)
    <div className="wrapper clear">
      <AppContext.Provider
        value={{
          items,
          favorite,
          cartItems,
          isItemAdded,
          setCartOpened,
          setCartItems,
          onAddToFavorite,
          onAddToCart,
        }}>
        <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          onClose={() => setCartOpened(false)}
          opened={cartOpened}
        />
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
            element={<Favorites onAddToFavorite={onAddToFavorite} />}></Route>

          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
