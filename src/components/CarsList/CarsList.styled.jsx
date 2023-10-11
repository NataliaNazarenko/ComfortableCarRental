import styled from '@emotion/styled';


export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  display: flex;
  row-gap: 25px;
  flex-direction: column;
  padding: 25px 50px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    row-gap: 50px;
    column-gap: 29px;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 25px 95px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 50px 128px;

    row-gap: 50px;
    column-gap: 29px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
