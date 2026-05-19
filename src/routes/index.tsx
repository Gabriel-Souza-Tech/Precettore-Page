import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import MentoriaHubPage from '../pages/MentoriaHubPage';
import MentoriaPosEdital from '../pages/MentoriaPosEdital';
import MentoriaPreEdital from '../pages/MentoriaPreEdital';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mentoria' element={<MentoriaHubPage />} />
        <Route path='/mentoria-pos-edital' element={<MentoriaPosEdital />} />
        <Route path='/mentoria-pre-edital' element={<MentoriaPreEdital />} />
        <Route path='/contato' element={<ContactPage />} />

        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
