import React from 'react'
import '../styles/global.css'

const UserList = ({users}) => {
  return (
    <div>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(UserList)