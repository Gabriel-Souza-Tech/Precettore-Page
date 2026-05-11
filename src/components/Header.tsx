import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronDown, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/5'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
        {/* PRIMEIRA LINHA */}
        <div className='flex justify-between items-center h-20'>
          <Link to='/' className='flex items-center'>
            <img
              src='/Logomarca.svg'
              alt='Precettore'
              className='h-14 w-auto'
            />
          </Link>

          <button className='group flex items-center gap-3 border-2 border-white hover:bg-white text-white hover:text-brand-dark px-8 py-2 rounded-md font-black text-sm uppercase tracking-widest transition-all'>
            <MessageSquare size={18} />
            Contato
          </button>
        </div>

        <div className='w-full h-px bg-white/10'></div>

        {/* SEGUNDA LINHA */}
        <nav className='hidden md:flex justify-start items-center h-14 gap-12'>
          <Link
            to='/'
            className='flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-primary transition-colors'
          >
            <Home size={18} className='text-brand-primary' /> Início
          </Link>

          {/* DROPDOWN DE TRILHAS */}
          <div
            className='relative h-full flex items-center'
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className='flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-primary transition-colors'>
              Trilhas <ChevronDown size={16} />
            </button>

            {/* Menu Dropdown */}
            <div
              className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <div className='bg-brand-dark border border-white/10 rounded-xl p-2 shadow-2xl'>
                <Link
                  to='/trilha-dominio-inep'
                  className='block px-4 py-3 text-xs font-bold uppercase tracking-tighter text-white hover:bg-brand-primary hover:text-brand-dark rounded-lg transition-colors'
                >
                  Domínio INEP – 1ª Fase
                </Link>
                <div className='px-4 py-3 text-[10px] font-bold text-brand-light/20 uppercase tracking-widest italic'>
                  Em breve: 2ª Fase Prática
                </div>
              </div>
            </div>
          </div>

          <Link
            to='/contato'
            className='flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-primary transition-colors'
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
