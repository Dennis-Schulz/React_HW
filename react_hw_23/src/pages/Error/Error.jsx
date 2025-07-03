import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className={styles.homeLink}>
        Go back to the main page
      </Link>
    </div>
  )
}

export default Error
