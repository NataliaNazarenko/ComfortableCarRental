import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64a3075bb45881cc0ae6077b.mockapi.io';


export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/car');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


