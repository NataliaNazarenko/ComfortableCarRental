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
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  gap: 18px;
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
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 128.6%;
`;

export const Select = styled.select`
  padding: 0.5em;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5em;

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
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const LabelFrom = styled.label`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 111.111%;
  border-radius: 14px 0px 0px 14px;
  padding: 14px 0 14px 24px;
  border-right: 2px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
`;

export const LabelTo = styled.label`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 111.111%;
  border-radius: 0px 14px 14px 0px;
  padding: 14px 23px 14px 24px;
  background: #f7f7fb;
`;

export const Input = styled.input`
  background: #f7f7fb;
  padding-left: 5px;
  border: none;
  outline: none;
  width: 89px;
  font-size: 18px;
  font-weight: 500;
  line-height: 111,1%;
`;


