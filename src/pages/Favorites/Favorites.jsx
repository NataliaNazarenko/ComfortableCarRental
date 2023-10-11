import React, { useEffect } from 'react';
import { CarsList } from 'components/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { Message } from 'components/Message';

import { Loader } from 'components/Loader';

export default function Favorites() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useSelector(state => state.cars.items);
  const isLoading = useSelector(state => state.cars.isLoading);
  const favorites = useSelector(state => state.favorites.items);

  
  let filterCars = [];
  filterCars = cars.filter(car => favorites.includes(car.id));

  return (
    <>
      {isLoading && <Loader />}
      {filterCars.length !== 0 && <CarsList cars={filterCars} />}

      {filterCars.length === 0 && !isLoading && <Message title="No favorite cars" content="You haven't added any cars to your favorites yet." />}
    </>
  );
};