import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#00BFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wrapper>
  );
}
