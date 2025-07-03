import { createSlice } from '@reduxjs/toolkit'

const savedUser = JSON.parse(localStorage.getItem('registeredUser'))

const initialState = {
  registerUser: savedUser ? savedUser : null,
  isAuthenticated: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.registerUser = action.payload
      localStorage.setItem('registeredUser', JSON.stringify(action.payload))
      state.error = null
    },
    login: (state, action) => {
      const { password, email } = action.payload
      if (
        state.registerUser &&
        email === state.registerUser.email &&
        password === state.registerUser.password
      ) {
        state.isAuthenticated = true
        state.error = null
      } else {
        state.error = 'Invalid email or password'
        state.isAuthenticated = false
        state.registerUser = null
      }
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.error = null
      localStorage.removeItem('registeredUser')
    },
  },
})

export const { register, login, logout } = authSlice.actions

export default authSlice.reducer
