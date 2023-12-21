import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchValue,
  onAddToCart,
  onAddToFavorite,
}) {
  return (
    <div className="content p-40">
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
    </div>
  );
}

export default Home;
