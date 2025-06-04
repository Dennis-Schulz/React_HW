import { useState } from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from '../redux/actions'
import '../styles/global.css'

const UserForm = ({ setUserInfo }) => {
  const [formData, setFormData] = useState({ name: '', status: '' })
  const [errors, setErrors] = useState({ name: '', status: '' })

  const validate = () => {
    let valid = true
    const newErrors = { name: '', status: '' }

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Длина имени должна быть не менее 2 символов.'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setUserInfo(formData)
    setFormData({ name: '', status: '' })
    setErrors({ name: '', status: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Edit User Information</h2>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete='off'
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select status</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        {errors.status && <span className="error">{errors.status}</span>}
      </div>

      <button
        type="submit"
        disabled={
          !formData.name || !formData.status || errors.name || errors.status
        }
      >
        Save
      </button>
    </form>
  )
}

export default connect(null, { setUserInfo })(UserForm)
