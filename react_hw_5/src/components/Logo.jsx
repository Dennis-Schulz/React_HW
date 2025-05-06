import React from 'react'
import LogoImg from '../assets/svg/Logo.svg'
import styles from '../styles/Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
    <img className={styles.logoImg} src={LogoImg} alt="Logo" />
    </div>
  )
}

export default Logo