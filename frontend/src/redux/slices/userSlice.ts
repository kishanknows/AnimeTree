import {createSlice} from '@reduxjs/toolkit';

export interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {
    createUser: (state, action) => {
      state = action.payload;
    },
  },
});
export const {createUser} = userSlice.actions;
export default userSlice.reducer;
