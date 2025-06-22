import styles from './Footer.module.css'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import '../../global.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.footerLeft}>
        <p className={styles.title}>Контакты</p>
        <p className={styles.contact}>8 800 000 00 00 <br /> emailexample@mail.com</p>
        <p className={styles.text}>2024 Сникер - магазин. Все права защищены</p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.social}>
          <a href="link.domain">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="link.domain">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="link.domain">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <input placeholder="Введите свой email:" />
      </div>
      </div>
    </footer>
  )
}

export default Footer
