import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Hero,
  Text,
  Button
} from './MainSection.styled';

export const MainSection = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Hero>
        <Text>Travel worry-free and in comfort</Text>
        <Button onClick={handleNav}>Your Comfort Now</Button>
      </Hero>
    </>
  );
};


