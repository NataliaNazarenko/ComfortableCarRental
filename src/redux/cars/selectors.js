import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'redux/filter/selectors';

export const getCars = state => state.cars.items;

export const getIsLoading = state => state.cars.isLoading;

export const getError = state => state.cars.error;

export const getFilterCars = createSelector([getCars, getFilter], (cars, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return cars.filter(({ name }) => name.toLowerCase().trim().includes(normalizedFilter));
});
