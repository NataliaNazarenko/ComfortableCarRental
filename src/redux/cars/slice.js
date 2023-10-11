import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const getActions = type => isAnyOf(fetchCars[type]);

const initialState = { 
  items: [], 
  isLoading: false,
  error: null 
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const carsReducer = carsSlice.reducer;