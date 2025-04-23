import React from 'react'

const OrderStatus = (props) => {
    const IdOrders = Math.floor(Math.random() * props.orders.length);
  return (
    <div>
    <p>Заказ #{props.orders[IdOrders].orderId}: {props.orders[IdOrders].status}</p>
    </div>
  )
}

export default OrderStatus