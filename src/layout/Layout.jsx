import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { FooterBar } from 'components/FooterBar';
import { HeaderBar } from 'components/HeaderBar';
// import { Main } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <HeaderBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <FooterBar /> */}
    </>
  );
}