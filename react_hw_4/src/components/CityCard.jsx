import React from 'react'
import styles from '../components/styles/CityCard.module.css'


const CityCard = ({ city }) => (
    <div className={styles.cityCard}>
      <h1>{city.name}</h1>
      <img src={city.imageUrl} alt={city.name} style={{ width: "100%", maxWidth: "400px" }} />
      <p style={{ fontSize: "26px", textAlign: "center" }}>{city.description}</p>
      <ul>
        {city.facts.map((fact, idx) => (
          <li style={{ fontSize: "20px" }} key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
  
  export default CityCard;