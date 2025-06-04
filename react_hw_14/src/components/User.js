import { connect } from 'react-redux'
import '../styles/global.css'

const User = ({ name, status }) => {
  return (
    <div className="user-info">
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>
        Status:{' '}
        <span className={status === 'online' ? 'text-green' : 'text-red'}>
          {status}
        </span>
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
})

export default connect(mapStateToProps)(User)
