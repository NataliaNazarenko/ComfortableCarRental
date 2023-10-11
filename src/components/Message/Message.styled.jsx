import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  padding: 20px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 20px 95px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 20px 128px;
  }
`;

export const Text = styled.p`
  color: #3470ff;
  font-family: Manrope;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  line-height: 24px;

  text-align: center;
`;

export const Title = styled.h2`
  color: #3470ff;
  font-family: Manrope;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  line-height: 24px;

  text-align: center;
`;

export const Catalog = styled(Link)`
  display: flex;

  padding: 12px 12px;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 12px;
  background-color: #3470ff;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;

  text-decoration: none;

  transition: background-color 250ms linear, transform 250ms linear;

  &:hover {
    background-color: #0b44cd;
    transform: scale(1.05);
  }
`;
