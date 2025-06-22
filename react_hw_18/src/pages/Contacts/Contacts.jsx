import { useState } from 'react'
import styles from './Contacts.module.css'
import facebook from '../../assets/facebook2.svg'
import snapchat from '../../assets/snapchat.svg'
import xIcon from '../../assets/x_icon.svg'

const Contacts = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!email.includes('@')) {
      newErrors.email = 'Введите корректный email'
    }

    if (!name.trim()) {
      newErrors.name = 'Введите ваше имя'
    }

    if (!message.trim()) {
      newErrors.message = 'Введите сообщение'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log({ email, name, message })
      alert('Сообщение отправлено!')
      setEmail('')
      setName('')
      setMessage('')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Контакты</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <ul className={styles.contact}>
            <li>8 800 000 00 00</li>
            <li>emailexample@email.com</li>
          </ul>

          <div className={styles.user}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className={styles.error}>{errors.email || '⠀'}</p>
            </div>

            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className={styles.error}>{errors.name || '⠀'}</p>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              className={styles.textarea}
              name="message"
              id="message"
              placeholder="Ваше сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <p className={styles.error}>{errors.message || '⠀'}</p>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.buttonSubmit} type="submit">
              Отправить
            </button>
          </div>
        </div>

        <div className={styles.socialContainer}>
          <p className={styles.socialTitle}>Найдите нас:</p>
          <div className={styles.iconContainer}>
            <a href="link.domain">
              <img className={styles.icon} src={facebook} alt="facebook" />
            </a>
            <a href="link.domain">
              <img className={styles.icon} src={snapchat} alt="snapchat" />
            </a>
            <a href="link.domain">
              <img className={styles.icon} src={xIcon} alt="xIcon" />
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contacts

