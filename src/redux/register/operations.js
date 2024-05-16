import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from '../../services/api';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('user/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);