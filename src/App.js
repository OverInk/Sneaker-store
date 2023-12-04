import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999 },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 12999 },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8999 },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999 },
];

function App() {
  return (
    //все доп классы берутся из библиотеки marco-css
    <div className="wrapper clear">
      <Drawer />

      <Header />

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
            <b>{obj.name}</b>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
