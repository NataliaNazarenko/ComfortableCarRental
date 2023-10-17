import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FooterBar } from 'components/FooterBar';
import { HeaderBar } from 'components/HeaderBar';
import { Container, MainContent, Footer } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <HeaderBar />
      <main>
        <MainContent>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainContent>
      </main>
      <Footer>
        <FooterBar />
      </Footer>
    </Container>
  );
}