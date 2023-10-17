import React, { useState } from 'react';

import {
  Container,
  Form,
  Select,
  Button,
  Input,
  Label,
  LabelFrom,
  LabelTo,
  Wrapper
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
        <Form>
        <Label htmlFor="car-brand">Make your choice
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
        </Label>
          

        <Label htmlFor="price">Price/1hour
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
        </Label>
          
        <Wrapper>
        <LabelFrom htmlFor="from">From car mileage / km
          <Input
              id="from"
              type="text"
              value={filterFrom}
              onChange={handleChangeFrom}
              
            />
        </LabelFrom>
          

        <LabelTo htmlFor="to">To car mileage / km
          <Input
              id="to"
              type="text"
              value={filterTo}
              onChange={handleChangeTo}
            />
        </LabelTo>
        </Wrapper>
        
          

        <Button type="button" onClick={handleFilter}>
          Search
        </Button>
        </Form>
      </Container>
  
    </>
  );
};