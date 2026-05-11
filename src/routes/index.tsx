import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TrilhaPage from '../pages/TrilhaPage';
import ContactPage from '../pages/ContactPage';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trilha-dominio-inep' element={<TrilhaPage />} />
        <Route path='/contato' element={<ContactPage />} />

        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
