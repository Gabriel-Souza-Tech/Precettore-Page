import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-brand-dark flex flex-col'>
      <Header />

      <main className='flex-grow'>
        <Hero />
      </main>

      <footer className='py-8 border-t border-brand-secondary/10 text-center text-brand-secondary text-xs'>
        © 2026 Precettore Aprova. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
