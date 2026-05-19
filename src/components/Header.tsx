import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronDown, MessageSquare, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className='sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md'>
      <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
        {/* PRIMEIRA LINHA (Topo visível em todas as telas) */}
        <div className='flex justify-between items-center h-20'>
          <Link to='/' className='flex items-center' onClick={closeMobileMenu}>
            <img
              src='/Logomarca.svg'
              alt='Precettore'
              className='h-14 w-auto'
            />
          </Link>

          {/* Botões do lado direito (Desktop = Contato | Mobile = Menu Hamburguer) */}
          <div className='flex items-center gap-4'>
            {/* O botão de contato agora some no mobile (para não espremer a logo) */}
            <Link to='/contato' className='hidden md:block'>
              <button className='group flex items-center gap-3 border-2 border-white hover:bg-white text-white hover:text-brand-dark px-8 py-2 rounded-md font-black text-sm uppercase tracking-widest transition-all'>
                <MessageSquare size={18} />
                Contato
              </button>
            </Link>

            {/* Botão Hambúrguer - Visível apenas no Mobile */}
            <button
              className='md:hidden text-white p-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div className='hidden md:block w-full h-px bg-white/10'></div>

        {/* SEGUNDA LINHA */}
        <nav className='hidden md:flex justify-start items-center h-14 gap-12'>
          <Link
            to='/'
            className='flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-primary transition-colors'
          >
            <Home size={18} className='text-brand-primary' /> Início
          </Link>

          {/* DROPDOWN DE TRILHAS DESKTOP */}
          <div
            className='relative h-full flex items-center'
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className='flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-primary transition-colors'>
              Mentorias <ChevronDown size={16} />
            </button>
            <div
              className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <div className='bg-brand-dark border border-white/10 rounded-xl p-2 shadow-2xl'>
                <Link
                  to='/mentoria-pos-edital'
                  className='block px-4 py-3 text-xs font-bold uppercase tracking-tighter text-white hover:bg-brand-primary hover:text-brand-dark rounded-lg transition-colors'
                >
                  Precettore Code Pos Edital
                </Link>
                <Link
                  to='/mentoria-pre-edital'
                  className='block px-4 py-3 text-xs font-bold uppercase tracking-tighter text-white hover:bg-brand-primary hover:text-brand-dark rounded-lg transition-colors'
                >
                  Precettore Code Pre Edital
                </Link>
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

      {/* NOVO: MENU MOBILE COMPLETO (Desliza para baixo) */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-brand-dark border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}
      >
        <div className='flex flex-col px-6 py-6 gap-6'>
          <Link
            to='/'
            onClick={closeMobileMenu}
            className='text-lg font-black uppercase tracking-widest text-white flex items-center gap-3'
          >
            <Home size={20} className='text-brand-primary' /> Início
          </Link>

          {/* Seção Trilha no Mobile (Aberto direto, sem dropdown) */}
          <div className='flex flex-col gap-3'>
            <span className='text-sm font-black uppercase tracking-widest text-brand-primary border-b border-white/10 pb-2'>
              Trilhas
            </span>
            <Link
              to='/trilha-dominio-inep'
              onClick={closeMobileMenu}
              className='pl-4 text-base font-bold text-white uppercase tracking-tighter'
            >
              Domínio INEP – 1ª Fase
            </Link>
            <span className='pl-4 text-xs font-bold text-white/30 uppercase tracking-widest italic'>
              Em breve: 2ª Fase Prática
            </span>
          </div>

          <Link
            to='/contato'
            onClick={closeMobileMenu}
            className='text-lg font-black uppercase tracking-widest text-white flex items-center gap-3 border-t border-white/10 pt-6'
          >
            <MessageSquare size={20} className='text-brand-primary' /> Fale
            Conosco
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
