import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const getEvents = createAsyncThunk(
    'events/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/events');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)