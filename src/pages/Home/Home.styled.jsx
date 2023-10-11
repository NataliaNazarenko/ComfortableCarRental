import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-right: auto;
  color: ${props => props.theme.colors.dark};
`;
