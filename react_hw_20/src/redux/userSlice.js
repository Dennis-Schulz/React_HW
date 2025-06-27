import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    { id: 1, name: 'Anna', email: 'anna@example.com' },
    { id: 2, name: 'Max', email: 'max@example.com' },
    { id: 3, name: 'Lisa', email: 'lisa@example.com' },
    { id: 4, name: 'Tom', email: 'tom@example.com' },
    { id: 5, name: 'Sophie', email: 'sophie@example.com' },
  ],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        ...action.payload,
      };
      state.users.push(newUser);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer
