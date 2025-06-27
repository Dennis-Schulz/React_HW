import { useSelector } from 'react-redux'
import { deleteUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { Table } from 'antd'

const selectUsers = (state) => state.user.users

const UserList = () => {
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User List</h1>
      <Table
        dataSource={users}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
             sorter: (a, b) => a.name.localeCompare(b.name),
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
          },
          {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Button
                type="link"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(record.id)}
              ></Button>
            ),
          },
        ]}
      />

    </div>
  )
}

export default UserList
