import { useState, useMemo, useCallback } from 'react'
import UserList from './components/UserList'
import './styles/global.css'

function App() {
  const Users = useMemo(
    () => [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Valera' },
      { id: 3, name: 'Artem' },
      { id: 4, name: 'Igor' },
      { id: 5, name: 'Vladimir' },
      { id: 6, name: 'Alexey' },
      { id: 7, name: 'Sergey' },
    ],
    []
  )

  const [filter, setFilter] = useState('')

  const filterUsers = useCallback((users, filterText) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    )
  }, [])

  const filteredUsers = useMemo(() => {
    return filterUsers(Users, filter)
  }, [Users, filter, filterUsers])

  return (
    <div className="App">
      <h1>User filter App</h1>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <UserList users={filteredUsers} />
    </div>
  )
}

export default App
