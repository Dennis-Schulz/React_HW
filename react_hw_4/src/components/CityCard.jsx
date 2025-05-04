import React, { useEffect, useRef, useState } from 'react'
import styles from '../components/styles/CityCard.module.css'
import {ReactComponent as ArrowBack} from '../components/icons/arrow_back_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import {ReactComponent as ArrowForward} from '../components/icons/arrow_forward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

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
      <div className={styles.slider}>
      <ArrowBack className={styles.arrow} onClick={() => prevImage()}/>
      <img src={city.imageUrl[imageIndex]} alt={city.name} style={{ width: "100%", maxWidth: "600px" }} />
      <ArrowForward className={styles.arrow} onClick={() => nextImage()}/>
      </div>
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
