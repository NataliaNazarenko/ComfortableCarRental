import React, { useState } from 'react';

import {
  Container,
  Select,
  Button,
  Input,
  Label
} from './Filter.styled';

import brands from 'db/brands.json';
import prices from 'db/prices.json';

export const Filter = ({
  setBrand,
  brand,
  setPrice,
  price,
  setFrom,
  from,
  setTo,
  to,
  handleFilter,
}) => {
  const [filterTo, setFilterTo] = useState('');
  const [filterFrom, setFilterFrom] = useState('');

  const handleChangeTo = e => {
    const choiceTo = e.target.value.replace(/,/g, '');
    setTo(choiceTo);
    setFilterTo(choiceTo === '0' ? '' : new Intl.NumberFormat('en-US').format(choiceTo));
  };

  const handleChangeFrom = e => {
    const choiceFrom = e.target.value.replace(/,/g, '');
    setFrom(choiceFrom);
    setFilterFrom(choiceFrom === '0' ? '' : new Intl.NumberFormat('en-US').format(choiceFrom));
  };

  return (
    <>
       <Container>
      <Label htmlFor="car-brand">Make your choice</Label>
      <Select
        id="car-brand"
        value={brand}
        onChange={e => setBrand(e.target.value)}
      >
        <option value="">Car brand</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </Select>

      <Label htmlFor="price">Price/1hour</Label>
      <Select
        id="price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      >
        <option value="">To $</option>
        {prices.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>

      <Label htmlFor="from">From car mileage / km</Label>
      <Input
        id="from"
        type="text"
        value={filterFrom}
        onChange={handleChangeFrom}
        // placeholder="Car mileage / km"
      />

      <Label htmlFor="to">To car mileage / km</Label>
      <Input
        id="to"
        type="text"
        value={filterTo}
        onChange={handleChangeTo}
      />

      <Button type="button" onClick={handleFilter}>
        Search
      </Button>
    </Container>
  
    </>
  );
};