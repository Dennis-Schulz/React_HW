import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Authorization from './pages/Authorization/Authorization'
import Registration from './pages/Registration/Registration'
import UserProfile from './pages/UserProfile/UserProfile'
import HomePage from './pages/HomePage/HomePage'
import Error from './pages/Error/Error'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import styles from './styles/App.module.css'

function App() {
  const location = useLocation()

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.navLink} ${
            location.pathname === '/' ? styles.active : ''
          }`}
        >
          Home
        </Link>
        <Link
          to="/registration"
          className={`${styles.navLink} ${
            location.pathname === '/registration' ? styles.active : ''
          }`}
        >
          Registration
        </Link>
        <Link
          to="/authorization"
          className={`${styles.navLink} ${
            location.pathname === '/authorization' ? styles.active : ''
          }`}
        >
          Login
        </Link>
        <Link
          to="/userProfile"
          className={`${styles.navLink} ${
            location.pathname === '/userProfile' ? styles.active : ''
          }`}
        >
          Profile
        </Link>
      </nav>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route
            path="/userProfile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
