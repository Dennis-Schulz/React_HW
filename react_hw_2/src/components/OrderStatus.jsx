import React from 'react'

const OrderStatus = ({orders}) => {
    const IdOrders = Math.floor(Math.random() * orders.length);
  return (
    <div>
    <p>Заказ #{orders[IdOrders].orderId}: {orders[IdOrders].status}</p>
    </div>
  )
}

export default OrderStatus