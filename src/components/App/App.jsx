import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/index';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites'));


export const App = () => {

  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    
  );
};
