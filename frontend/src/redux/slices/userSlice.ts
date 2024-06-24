import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
  id: string;
  username: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
}

const initialState: User = {
  id: '',
  username: '',
  email: '',
  token: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    deleteUser: state => {
      state = initialState;
    },
  },
});
export const {createUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
