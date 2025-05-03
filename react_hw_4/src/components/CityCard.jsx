import React, { useEffect, useRef, useState } from 'react'
import styles from '../components/styles/CityCard.module.css'

const CityCard = ({ city }) => {
  const descriptionRef = useRef(null)
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(() => {
    const el = descriptionRef.current
    if (el) {
      el.classList.remove(styles.slide) 
      void el.offsetWidth 
      el.classList.add(styles.slide) 
    }
  }, [city.description]) 

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % city.imageUrl.length)
  }

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + city.imageUrl.length) % city.imageUrl.length)
  }

  return (
    <div className={styles.cityCard}>
      <h2>{city.name}</h2>
      <img src={city.imageUrl[imageIndex]} alt={city.name} style={{ width: "100%", maxWidth: "350px" }} />
      <button onClick={() => nextImage()}>Вперед</button>
      <button onClick={() => prevImage()}>Назад</button>
      <p ref={descriptionRef} className={`${styles.description} ${styles.slide}`}>
        {city.description}
      </p>
      <ul>
        {city.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityCard
