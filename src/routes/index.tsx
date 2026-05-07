import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TrilhaPage from '../pages/TrilhaPage';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trilha-dominio-inep' element={<TrilhaPage />} />

        {/* Rota de 404 - Opcional mas recomendado */}
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
