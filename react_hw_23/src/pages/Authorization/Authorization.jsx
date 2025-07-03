import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Authorization.module.css';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      setEmail('');
      setPassword('');
      navigate('/userProfile');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          name="email"
          autoComplete="off"
          required
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          name="password"
          autoComplete="off"
          required
        />
        <button className={styles.button} type="submit">
          Sign In
        </button>
      </form>
      <Link to="/registration" className={styles.link}>
        Don't have an account? Register
      </Link>
    </div>
  );
};

export default Authorization;