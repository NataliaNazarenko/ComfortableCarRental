import React from 'react';
import { useState } from 'react';
import {
  Container,
  Image,
  FavoriteCar,
  Wrapper,
  Description,
  Make,
  Model,
  Year,
  RentalPrice,
  Info,
  AdditionalInfo,
  Delimiter,
  ButtonLearnMore,
} from './CarCard.styled';

import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'redux/favorites/slice';

import Line from '../../images/line.svg';
import Favorite from '../../images/favorite.svg';
import ActiveFavorite from '../../images/active-favorite.svg';

import { Modal } from 'components/Modal';

const body = document.querySelector('body');

export const CarCard = ({ car }) => {
  
  const adress = car.address.split(', ');
  const country = adress[adress.length - 1];
  const city = adress[adress.length - 2];

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  
  const handleToggleModal = () => {
    setIsOpenedModal(prevState => !prevState);
    if (isOpenedModal === true) {
      body.style.overflow = 'scroll';
    }
    if (isOpenedModal === false) {
      body.style.overflow = 'hidden';
    }
  };

  
  const closeModal = () => {
    setIsOpenedModal(false);
    body.style.overflow = 'scroll';
  };

  return (
    <>
      
      {isOpenedModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          closeModal={closeModal}
          car={car}
        />
      )}
      <Container>
        <div>
          <Wrapper>
            <Image src={car.img} alt="Car Image" />
            {!favorites.includes(car.id) && (
              <FavoriteCar
                src={Favorite}
                onClick={() => dispatch(toggleFavorite(car.id))}
              />
            )}
            
            {favorites.includes(car.id) && (
              <FavoriteCar
                src={ActiveFavorite}
                onClick={() => dispatch(toggleFavorite(car.id))}
              />
            )}
          </Wrapper>
          <Description>
            <div>
              <Make>{car.make} </Make>
              <Model>{car.model}</Model>
              <Year>, {car.year}</Year>
            </div>
            <RentalPrice>{car.rentalPrice}</RentalPrice>
          </Description>
          <Info>
            <AdditionalInfo>{city}</AdditionalInfo>
            <Delimiter src={Line} />
            <AdditionalInfo>{country}</AdditionalInfo>
            <Delimiter src={Line} />
            <AdditionalInfo>{car.rentalCompany}</AdditionalInfo>
            <Delimiter src={Line} />
            <AdditionalInfo>Premium</AdditionalInfo>
          </Info>
          <Info>
            <AdditionalInfo>{car.type}</AdditionalInfo>
            <Delimiter src={Line} />
            <AdditionalInfo>{car.make}</AdditionalInfo>
            <Delimiter src={Line} />
            <AdditionalInfo>{car.id}</AdditionalInfo>
            <Delimiter src={Line} />
            <AdditionalInfo>Power liftgate</AdditionalInfo>
          </Info>
        </div>
        <ButtonLearnMore type="button" onClick={handleToggleModal}>
          Learn more
        </ButtonLearnMore>
      </Container>
    </>
  );
};

export default CarCard;
