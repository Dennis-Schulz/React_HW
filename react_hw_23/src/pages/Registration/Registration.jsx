import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/slices/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Registration.module.css'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ email, password }))
    setEmail('')
    setPassword('')
    navigate('/authorization')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Account</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          required
        />
        <input
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          required
          minLength="6"
        />
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
      <Link to="/authorization" className={styles.link}>
        Already have an account? Sign in
      </Link>
    </div>
  )
}

export default Registration
