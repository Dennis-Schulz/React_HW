import React from 'react'
import { MdDelete } from 'react-icons/md'
import styles from './CartCard.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartCard = ({ product }) => {
  const { deleteFromCart } = useContext(CartContext)

  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={product.image}
        alt={`${product.name}`}
      />
      <div className={styles.divider}></div>
      <h3 className={styles.title}>{product.name}</h3>
      <div className={styles.priceButton}>
        <div className={styles.price}>
          <p>ЦЕНА:</p>
          <p>{product.price} р.</p>
        </div>
        <button onClick={() => deleteFromCart(product.id)}>
          <MdDelete size={22} />
        </button>
      </div>
    </div>
  )
}

export default CartCard
