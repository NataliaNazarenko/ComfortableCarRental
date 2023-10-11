import { CarsList } from 'components/CarsList';
import { Filter } from 'components/Filter';
import { LoadMore } from 'components/LoadMore';
import { Message } from './Catalog.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{ fetchCars } from 'redux/cars/operations';

import { Loader } from 'components/Loader';

export default function Catalog() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  const cars = useSelector(state => state.cars.items);
  const isLoading = useSelector(state => state.cars.isLoading);

  const [page, setPage] = useState(1);

  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const [filterCars, setFilterCars] = useState([]);

  useEffect(() => {
    setFilterCars(cars);
  }, [cars]);

  const handleFilter = () => {
    setPage(1);
    let choiceCar = cars;
    
    if (brand !== '') {
      choiceCar = choiceCar.filter(
        item => item.make.toLowerCase() === brand.toLowerCase()
      );
    }

    
    if (price !== '') {
      const array = [...choiceCar];
      choiceCar = [...[]];

      for (let car of array) {
        const choicePrice = car.rentalPrice.slice(
          1,
          car.rentalPrice.length
        );

        if (choicePrice <= price) {
          choiceCar.push(car);
        }
      }
    }

    if (from !== '') {
      choiceCar = choiceCar.filter(item => from <= item.mileage);
    }

    if (to !== '') {
      choiceCar = choiceCar.filter(item => to >= item.mileage);
    }

    setFilterCars(choiceCar);
  };

  
  let carsBrand = [];

  carsBrand = filterCars.filter(
    (element, index, array) => index < page * 8
  );

  return (
    <>
      {isLoading && <Loader />}
      <Filter
        setBrand={setBrand}
        selectedBrand={brand}
        setPrice={setPrice}
        price={price}
        setFrom={setFrom}
        from={from}
        to={to}
        setTo={setTo}
        handleFilter={handleFilter}
      />
      <CarsList cars={carsBrand} />
      {carsBrand.length === 0 && !isLoading && <Message>Unfortunately, there is no suitable car for your request. Try changing your search parametrs</Message>}
      {filterCars.length > page * 8 && <LoadMore setPage={setPage} />}
    </>
  );
};