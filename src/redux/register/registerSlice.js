import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    date: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const registerSlice = createSlice({
  name: 'user',
  initialState,
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
    selectUser: state => state.user,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
  },
});
export const registerReducer = registerSlice.reducer;
export const { selectIsLoggedIn, selectIsLoading, selectUser } =
registerSlice.selectors;