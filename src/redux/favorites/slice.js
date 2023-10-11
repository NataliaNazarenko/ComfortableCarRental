import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = { items: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      if (state.items.includes(action.payload)) {
        const newArray = state.items.filter(item => item !== action.payload);
        state.items = newArray;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { toggleFavorite } = favoritesSlice.actions;


