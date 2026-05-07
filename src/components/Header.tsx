import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-secondary/20'>
      <div className='w-full px-4 sm:px-10 lg:px-16'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo Area */}
          <div className='flex items-center gap-3'>
            <img
              src='/Logomarca.svg'
              alt='Logotipo Precettore'
              className='h-16 w-auto object-contain' // Ajustei levemente a altura para 16 (64px)
            />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-12'>
            {' '}
            {/* Aumentei o espaço entre os links (space-x-12) */}
            <a
              href='#home'
              className='text-sm font-medium text-brand-light hover:text-brand-primary transition-colors'
            >
              Início
            </a>
            <a
              href='#sobre'
              className='text-sm font-medium text-brand-light hover:text-brand-primary transition-colors'
            >
              Metodologia
            </a>
            <a
              href='#cursos'
              className='text-sm font-medium text-brand-light hover:text-brand-primary transition-colors'
            >
              Cursos
            </a>
          </nav>

          {/* Call to Action */}
          <div className='flex items-center'>
            <button className='bg-brand-primary hover:bg-brand-primary/90 text-brand-dark px-8 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/20'>
              Área do Aluno
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
