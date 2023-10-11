import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  padding: ${props => props.theme.spacing(5)};
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const TitleName = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;

  margin-bottom: ${props => props.theme.spacing(10)};
`;
