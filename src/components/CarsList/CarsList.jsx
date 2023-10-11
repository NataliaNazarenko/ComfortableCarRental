import React from 'react';
import { Container, Title } from './CarsList.styled';
import { CarCard } from 'components/CarCard';

export const CarsList = ({ cars }) => {
  return (
    <>
      <Title>Cars for rent</Title>
      <Container>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </Container>
    </>
  );
};