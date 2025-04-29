import React from "react";
import { useState } from "react";
import styles from '../styles/Rating.module.css'

const Rating = () => {
  const ratingList = [
    "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",
    "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",
    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",
    "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
  ];
  const [ratingValue, setRatingValue] = useState(3);

  return ( 
  <div className={styles.container}>
    <img className={styles.image} src={ratingList[ratingValue]} alt="" />
    <div>
    <button className={styles.button} onClick={()=>setRatingValue(3)}>Плохо</button>
    <button className={styles.button} onClick={()=>setRatingValue(2)}>Приемлемо</button>
    <button className={styles.button} onClick={()=>setRatingValue(1)}>Хорошо</button>
    <button className={styles.button} onClick={()=>setRatingValue(0)}>Отлично</button>
    </div>
  </div>
  )
};

export default Rating;
