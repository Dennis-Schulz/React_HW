import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
        to="/articles"
      >
        Статьи
      </NavLink>
    </div>
  )
}

export default Navbar
