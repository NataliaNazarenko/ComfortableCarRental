import React from 'react';

import {
  Backdrop,
  ModalBlock,
  CloseButton,
  CloseIcon,
  Wrapper,
  Image,
  Description,
  Make,
  Model,
  Year,
  Info,
  Element,
  Delimiter,
  Text,
  SubTitle,
  Line,
  Block,
  Item,
  Accent,
  Button,
} from './Modal.styled';

import ClBtnIco from '../../images/close.svg';
import DelimiterIco from '../../images/line.svg';

import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ handleToggleModal, closeModal, car }) => {
  
  const adress = car.address.split(', ');
  const country = adress[adress.length - 1];
  const city = adress[adress.length - 2];
  const price = car.rentalPrice.slice(1, car.rentalPrice.length);
  const rental = car.rentalConditions.split('\n');
  const minAge = rental[0].split(': ');

  let mileage = car.mileage.toString().split('');
  mileage.splice(mileage.length - 3, 0, ',');
  
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };

  const onEscClose = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      window.removeEventListener('keydown', onEscClose);
      closeModal();
    }
  };

  window.addEventListener('keydown', onEscClose);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalBlock>
        <CloseButton onClick={handleToggleModal}>
          <CloseIcon src={ClBtnIco} />
        </CloseButton>
        <div>
          <Wrapper>
            <Image src={car.img} alt="car preview" />
          </Wrapper>
        </div>

        <Description>
          <Make>{car.make}&nbsp;</Make>
          <Model>{car.model}</Model>
          <Year>, {car.year}</Year>
        </Description>
        <Info>
          <Element>{city}</Element>
          <Delimiter src={DelimiterIco} />
          <Element>{country}</Element>
          <Delimiter src={DelimiterIco} />
          <Element>Id: {car.id}</Element>
          <Delimiter src={DelimiterIco} />
          <Element>Year: {car.year}</Element>
          <Delimiter src={DelimiterIco} />
          <Element>Type: {car.type}</Element>
        </Info>
        <Info>
          <Element>Fuel Consumption: {car.fuelConsumption}</Element>
          <Delimiter src={DelimiterIco} />
          <Element>Engine Size: {car.engineSize}</Element>
        </Info>

        <Text>{car.description}</Text>

        <SubTitle>Accessories and functionalities:</SubTitle>
        <Info>
          {car.accessories.map((item, index, array) => {
            return (
              <Line key={item}>
                <Element> {item}</Element>
                {array.length - 1 !== index && <Delimiter src={DelimiterIco} />}
              </Line>
            );
          })}
        </Info>

        <Info>
          {car.functionalities.map((item, index, array) => {
            return (
              <Line key={item}>
                <Element> {item}</Element>
                {array.length - 1 !== index && <Delimiter src={DelimiterIco} />}
              </Line>
            );
          })}
        </Info>

        <SubTitle>Rental Conditions:</SubTitle>
        <Block>
          <Item>
            {minAge[0]}:&nbsp;<Accent>{minAge[1]}</Accent>
          </Item>
          <Item>{rental[1]}</Item>
          <Item>{rental[2]} </Item>

          <Item>
            Mileage:&nbsp;<Accent>{mileage}</Accent>
          </Item>
          <Item>
            Price:&nbsp;
            <Accent>{price}$</Accent>
          </Item>
        </Block>

        <Button href="tel:+380730000000">Rental car</Button>
      </ModalBlock>
    </Backdrop>,
    modalRoot
  );
};