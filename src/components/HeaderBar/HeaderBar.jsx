import React from 'react';
import { Container, Header, LogoImg, Wrapper, StyledNavLink } from './HeaderBar.styled';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const HeaderBar = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Link to="/">
            <LogoImg src={Logo} alt="logo" />
          </Link>
          <StyledNavLink to="/">Home</StyledNavLink>
        </Wrapper>

        <Wrapper>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </Wrapper>
      </Container>
    </Header>
  );
};