import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://658337464d1ee97c6bcdaa98.mockapi.io/orders');
        // console.log(data);
        // console.log(data.map((obj) => obj.items).flat());
        console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Оши бка при запросе заказов!');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex flex-wrap">
        <h1>Мои заказы</h1>
        {(isLoading ? [...Array(4)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
