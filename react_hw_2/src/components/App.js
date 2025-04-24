import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";
function App() {

  const products = [
    "Ноутбук ASUS ROG",
    "Смартфон iPhone 13",
    "Наушники Sony WH-1000XM4",
    "Телевизор Samsung QLED",
    "Кофемашина DeLonghi",
    "Фитнес-браслет Xiaomi Mi Band",
    "Игровая консоль PlayStation 5",
    "Микроволновая печь LG",
    "Электронная книга Kindle Paperwhite",
    "Умная колонка Яндекс Станция"
  ];
  const products2 = "";

  const orders = [
    { orderId: 101, status: 'в пути' },
    { orderId: 102, status: 'доставлен' },
    { orderId: 103, status: 'обработка' },
    { orderId: 104, status: 'отменен' },
    { orderId: 105, status: 'в пути' },
    { orderId: 106, status: 'ожидает оплаты' },
    { orderId: 107, status: 'доставлен' },
    { orderId: 108, status: 'в пути' },
    { orderId: 109, status: 'возврат' },
    { orderId: 110, status: 'обработка' }
  ];

  return (
    <div className="App">
      <Greeting name="Денис" />
      <ShoppingList products={products} />
      <ShoppingList products={products2} />
      <OrderStatus orders={orders} />
    </div>
  );
}

export default App;
