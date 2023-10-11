import { ReactSVG } from 'react-svg';
import styled from '@emotion/styled';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBlock = styled.div`
  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 335px;

  min-height: 225px;
  max-height: 80%;

  padding: 40px;

  border-radius: 24px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    // background:transparent
    background: #3e85f3;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    height: 112px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
  }

  @media screen and (min-width: 768px) {
    max-width: 541px;
  }
`;

export const CloseButton = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: black;

  transition: color 250ms linear, transform 250ms linear;

  &:hover {
    color: #3470ff;
    transform: scale(1.1);
  }
`;

export const CloseIcon = styled(ReactSVG)`
  stroke: currentColor;
`;

export const Wrapper = styled.div`
  border-radius: 14px;
  background: #f3f3f2;
  overflow: hidden;

  margin-bottom: 14px;

  width: 255px;
  height: 130px;

  @media screen and (min-width: 768px) {
    width: 461px;
    height: 248px;
  }
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Make = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33333;
`;

export const Model = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33333;
`;

export const Year = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33333;
`;

export const Info = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
`;

export const Element = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const Delimiter = styled(ReactSVG)`
  margin-right: 6px;
  margin-left: 6px;
`;

export const Text = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857;

  margin-top: 14px;
`;

export const SubTitle = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42857;

  margin-top: 24px;
  margin-bottom: 8px;
`;

export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const Accent = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const Button = styled.a`
  max-width: 180px;
  padding: 12px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  margin-top: 24px;

  text-decoration: none;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;

  transition: background-color 250ms linear, transform 250ms linear;

  &:hover {
    background-color: #0b44cd;
    transform: scale(1.05);
  }
`;
