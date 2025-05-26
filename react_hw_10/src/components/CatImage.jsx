import styles from './CatImage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CatImage = () => {
  const [catImage, setCatImage] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const fetchCatImage = async () => {
    try {
      setIsExpanded(false)
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
      )
      setCatImage(response.data[0].url)
      setTimeout(() => {
        setIsExpanded(true)
      }, 100)
    } catch (error) {
      console.error('Error fetching cat image:', error)
    }
  }

  useEffect(() => {
    fetchCatImage()
  }, [])

  if (!catImage) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.container}>
      <div className={styles.wave}>
        <span className={styles.waveSpan} style={{ '--i': 1 }}>
          R
        </span>
        <span className={styles.waveSpan} style={{ '--i': 2 }}>
          a
        </span>
        <span className={styles.waveSpan} style={{ '--i': 3 }}>
          n
        </span>
        <span className={styles.waveSpan} style={{ '--i': 4 }}>
          d
        </span>
        <span className={styles.waveSpan} style={{ '--i': 5 }}>
          o
        </span>
        <span className={styles.waveSpan} style={{ '--i': 6 }}>
          m
        </span>
        <span className={styles.waveSpan} style={{ '--i': 6.5 }}>
          &nbsp;
        </span>
        <span className={styles.waveSpan} style={{ '--i': 7 }}>
          C
        </span>
        <span className={styles.waveSpan} style={{ '--i': 8 }}>
          a
        </span>
        <span className={styles.waveSpan} style={{ '--i': 9 }}>
          t
        </span>
        <span className={styles.waveSpan} style={{ '--i': 9.5 }}>
          &nbsp;
        </span>
        <span className={styles.waveSpan} style={{ '--i': 10 }}>
          I
        </span>
        <span className={styles.waveSpan} style={{ '--i': 11 }}>
          m
        </span>
        <span className={styles.waveSpan} style={{ '--i': 12 }}>
          a
        </span>
        <span className={styles.waveSpan} style={{ '--i': 13 }}>
          g
        </span>
        <span className={styles.waveSpan} style={{ '--i': 14 }}>
          e
        </span>
      </div>
      <img
        className={`${styles.catImage} ${
          isExpanded ? styles.expanded : styles.shrunk
        }`}
        src={catImage}
        alt="Random cat"
      />
      <button onClick={fetchCatImage} >Load New Image</button>
    </div>
  )
}

export default CatImage
