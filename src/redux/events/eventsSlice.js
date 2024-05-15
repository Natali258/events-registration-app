import { createSlice } from '@reduxjs/toolkit';
import { getEvents } from './operations';


const initialState = {
  items: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getEvents.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
  },
});

export const selectEvents = state => state.events.items;
export const selectIsLoading = state => state.events.loading;
export const selectError = state => state.events.error;
export const eventsReducer = eventsSlice.reducer;