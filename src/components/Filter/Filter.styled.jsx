import styled from '@emotion/styled';


export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  padding: 20px 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 20px 95px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 20px 128px;
  }
`;

export const Button = styled.button`
  padding: 14px 44px;
  border: none;
  height: 56px;
  align-self: flex-start;
  margin-top: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #3470ff;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;

  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const Forma = styled.div`
  @media screen and (max-width: 767px) {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5em;
  display: block;
`;

export const Select = styled.select`
  padding: 0.5em;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  padding: 0.5em;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5em;
`;
