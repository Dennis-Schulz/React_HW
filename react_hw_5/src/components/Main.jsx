import React from 'react'
import Logo from './Logo'
import Title from './Title'
import Content from './Content'
import styles from '../styles/Main.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
        <Logo />
        <Title />
        <Content />
    </div>
  )
}

export default Main