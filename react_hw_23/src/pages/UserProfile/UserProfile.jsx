import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import styles from './UserProfile.module.css'

const UserProfile = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>User Profile</h1>
      <button
        className={styles.logoutButton}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  )
}

export default UserProfile
