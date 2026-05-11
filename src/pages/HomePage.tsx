import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustInfo from '../components/TrustInfo';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-brand-dark flex flex-col'>
      <Header />

      <main className='grow'>
        <Hero />
        <TrustInfo />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
