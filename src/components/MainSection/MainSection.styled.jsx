import styled from '@emotion/styled';
import ImgBg from '../../images/ImgBg.jpg';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;


export const Hero = styled.div`
  margin: 0 auto;
  height: 800px;
  padding: 100px 0px;
  background-image: url(${ImgBg});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1440px) {
    padding: 200px 0px;
    
  }
`;

export const Text = styled.h1`
  font-size: 44px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 80px;
  }

  
`;

export const Button = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 12px 52px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.medium};
    background-color: #0b44cd;
  }
`;

