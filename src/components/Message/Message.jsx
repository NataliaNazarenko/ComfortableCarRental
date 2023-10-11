import React from 'react';
import {
    Container,
    Text,
    Catalog,
    Title
} from './Message.styled';

export const Message = ({ title, content }) => {
  return (
    <>
        <Container>
         {title && <Title>{title}</Title>}
         {content && <Text>{content}</Text>}
         <Catalog to="/catalog">
          Follow to catalog and choose favorite cars
        </Catalog>
        </Container>
      
    </>
  );
};