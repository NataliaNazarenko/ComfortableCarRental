import React from 'react';

import { Container, Button } from './LoadMore.styled';

export const LoadMore = ({ setPage }) => {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => setPage(prevState => prevState + 1)}
      >
        Load more
      </Button>
    </Container>
  );
};