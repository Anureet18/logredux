import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    username: '',
    password: '',
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
      state.password = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '' ;
      state.password = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;