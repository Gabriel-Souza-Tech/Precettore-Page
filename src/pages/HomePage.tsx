import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CourseCurriculum from '../components/CourseCurriculum';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-brand-dark flex flex-col'>
      <Header />

      <main className='flex-grow'>
        <Hero />

        {/* Aqui você pode adicionar a seção de Pricing que criamos anteriormente */}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
