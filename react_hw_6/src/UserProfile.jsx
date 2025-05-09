import styles from './UserProfile.module.css'
import { useState, useEffect} from 'react'
import axios from 'axios'


const UserProfile = () => {
 const [user, setUser] = useState(null)



async function fetchUser() {
  try {
    const response = await axios.get('https://randomuser.me/api')
    setUser(response.data.results[0])
  } catch (error) {
    console.log(error)
  }
}   

  useEffect(() => {
fetchUser()
}, [])

if (!user) {
  return <p>Loading...</p>
}

  return (
    <div className={styles.userProfile}>
        <div className={styles.avatar}>
      <img src={user.picture.large} alt="" />
      </div>
      <h1>{user.name.first} {user.name.last}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={fetchUser}>Load New User</button>
    </div>
  )
}

export default UserProfile