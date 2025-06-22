import React, { useEffect, useState } from 'react'
import axios from 'axios'
import banner from '../../assets/banner.png'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Main.module.css'

const Main = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://682d82ec4fae188947564789.mockapi.io/products')
        setProducts(response.data)
      } catch (err) {
        console.error('Ошибка при загрузке товаров:', err)
        setError('Не удалось загрузить товары.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="container" style={{ margin: 'auto' }}>
      <div className={`${styles.bannerWrapper} container`}>
        <img src={banner} alt="Banner" className={styles.bannerImage} />
      </div>

      <h2 className={styles.title}>Товары</h2>

      <div className={styles.divider}></div>

      {loading && <p className={styles.loading}>Загрузка товаров...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <div className={styles.products}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Main

