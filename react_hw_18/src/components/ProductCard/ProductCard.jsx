import React from 'react'
import styles from './ProductCard.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductCard = ({product}) => {
const {addToCart} = useContext(CartContext)

  return (
    <div className={styles.card}>
        <img className={styles.cardImg}  src={product.image} alt={`${product.name}`}/>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.priceButton}>
            
            <div className={styles.price}>
                <p>ЦЕНА:</p>
                <p>{product.price} р.</p>
            </div>
            <button onClick={() => addToCart(product)}>+</button>
        </div>
    </div>
  )
}

export default ProductCard