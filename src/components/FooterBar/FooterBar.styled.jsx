import styled from '@emotion/styled';

export const Section = styled.div`
  background-color: #3470ff;
  
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  
  padding: 20px 50px;

  display: flex;
  justify-content: center;
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

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1187px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Contact = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  margin-left: 5px;

  &:hover {
    color: blue;
  }
`;

export const Email = styled.a`
  font-size: 16px;
  margin-left: 5px;
  color: white;

  &:hover {
    color: blue;
  }
`;

export const Address = styled.p`
  color: white;
  font-size: 16px;
  margin-left: 5px;
`;


