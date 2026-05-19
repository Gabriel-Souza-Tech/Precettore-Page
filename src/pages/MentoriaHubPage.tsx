import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TutorySection from '../components/TutorySection';
import FaqSection from '../components/FaqSection';
import { ArrowRight, ChevronDown, Brain, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentoriaHubPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-brand-dark text-white flex flex-col'>
      <Header />

      <main className='grow'>
        {/* SEÇÃO 1: HERO */}
        <section className='pt-32 pb-20 max-w-360 mx-auto  px-4 md:px-10 lg:px-18 text-center relative overflow-hidden'>
          <div className='inline-block px-4 py-1 border border-brand-primary/30 rounded-full mb-6 bg-brand-primary/5'>
            <span className='text-brand-primary text-xs font-black uppercase tracking-[0.2em]'>
              Mentoria Inteligente Revalida
            </span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6'>
            Precettore{' '}
            <span className='bg-linear-to-r from-brand-primary to-cyan-400 bg-clip-text text-transparent'>
              Code
            </span>
          </h1>
          <p className='text-brand-light/60 text-lg md:text-xl max-w-3xl mx-auto mb-10'>
            A mentoria inteligente para médicos que querem aprovação no REVALIDA
            com direção, estratégia e treinamento focado no padrão INEP.
          </p>
          <a
            href='#trilhas'
            className='inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black px-8 py-4 rounded-full transition-all uppercase tracking-wider text-sm shadow-xl shadow-orange-900/20'
          >
            Escolha Sua Trilha <ArrowRight size={16} />
          </a>
        </section>

        {/* SEÇÃO 2: COMPONENTE TUTORY */}
        <TutorySection />

        {/* SEÇÃO 3: O HUB DE MENTORIAS */}
        <section
          id='trilhas'
          className='py-24 bg-white/2 border-y border-white/5'
        >
          <div className='max-w-360 mx-auto  px-4 md:px-10 lg:px-18'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-5xl font-black uppercase tracking-tight mb-4'>
                Escolha o seu momento estratégico
              </h2>
              <p className='text-white/40 font-serif italic text-lg'>
                Duas rotas desenhadas especificamente para o edital do INEP
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto'>
              {/* CARD 1: PRÉ-EDITAL */}
              <div className='bg-[#0A1622] p-8 md:p-12 border border-white/5 rounded-2xl flex flex-col justify-between group hover:border-brand-primary/30 transition-all duration-300'>
                <div>
                  <span className='text-brand-primary font-bold text-xs uppercase tracking-widest block mb-2'>
                    Foco em Base e Retenção
                  </span>
                  <h3 className='text-2xl font-black uppercase mb-4 text-[#C5A47E]'>
                    Code Pré-Edital
                  </h3>
                  <p className='text-white/60 text-sm mb-6'>
                    Construção de base sólida de longo prazo, consolidação de
                    temas de alta incidência e antecipação estratégica antes da
                    abertura do edital.
                  </p>
                </div>
                <Link to='/mentoria-pos-edital'>
                  <button className='w-full py-4 bg-white/5 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300 font-bold uppercase tracking-wider text-xs rounded-lg'>
                    Conhecer Formato Pré-Edital
                  </button>
                </Link>
              </div>

              {/* CARD 2: PÓS-EDITAL */}
              <div className='bg-[#0A1622] p-8 md:p-12 border border-white/5 rounded-2xl flex flex-col justify-between group hover:border-brand-primary/30 transition-all duration-300'>
                <div>
                  <span className='text-brand-primary font-bold text-xs uppercase tracking-widest block mb-2'>
                    Reta Final e Velocidade
                  </span>
                  <h3 className='text-2xl font-black uppercase mb-4 text-[#C5A47E]'>
                    Code Pós-Edital
                  </h3>
                  <p className='text-white/60 text-sm mb-6'>
                    Treinamento intensivo de simulados, ajustes finos de
                    desempenho em pontos fracos imediatos e táticas de guerra
                    para o dia da prova.
                  </p>
                </div>
                <Link to='/mentoria-pre-edital'>
                  <button className='w-full py-4 bg-white/5 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300 font-bold uppercase tracking-wider text-xs rounded-lg'>
                    Conhecer Formato Pós-Edital
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: FAQ */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default MentoriaHubPage;
