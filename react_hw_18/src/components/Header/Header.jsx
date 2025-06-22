import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import '../../global.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const Header = () => {
const {cartItems} = useContext(CartContext)
const totalCount = cartItems.length 
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.wrapper}>
        <h1>Сникер - магазин</h1>
        <nav>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#FFFFFF' : '#FFFFFF80' })}>Главная</NavLink>
          <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? '#FFFFFF' : '#FFFFFF80' })}>Корзина {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}</NavLink>
          <NavLink to="/news" style={({ isActive }) => ({ color: isActive ? '#FFFFFF' : '#FFFFFF80' })}>Новости</NavLink>
          <NavLink to="/contacts" style={({ isActive }) => ({ color: isActive ? '#FFFFFF' : '#FFFFFF80' })}>Контакты</NavLink>
        </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
