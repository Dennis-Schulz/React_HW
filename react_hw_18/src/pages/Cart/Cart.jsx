import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartCard from '../../components/CartCard/CartCard'
import styles from './Cart.module.css'

const Cart = () => {
  const { cartItems } = useContext(CartContext)
  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0)

  return (
    <div>
    <div className={styles.container}>
      <div className={styles.wrapper + ' container'}>
    <h1 className={styles.title}>Корзина</h1>
    </div>
      <div className={styles.cartContainer + ' container'}>
        <div className={styles.cartList}>
          {cartItems.length > 0 &&
            cartItems.map(product => (
              <CartCard key={product.id} product={product} />
            ))}
        </div>
        <div className={styles.summary}>
          <h2>Итого</h2>
          {cartItems.map(product => (
            <p className={styles.summaryItem} key={`name-${product.id}`}>
              {product.name}
            </p>
          ))}
          <div className={styles.totalLabel}>ЦЕНА:</div>
          <div className={styles.totalValue}>{totalPrice} р.</div>
        </div>
      </div>
    </div>
      </div>    
  )
}

export default Cart
