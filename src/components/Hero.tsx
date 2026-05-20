import React from 'react';
import autoridadeRecorte from '../assets/autoridadeRecorte.webp';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className='relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden'>
      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-12'>
          {/* Lado Esquerdo: Textos e CTA */}
          <div className='flex-1 text-center lg:text-left z-10 '>
            <span className='inline-block py-2 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-10 border border-brand-primary/20'>
              Método Comprovado
            </span>
            <h1 className='text-4xl md:text-6xl font-black text-white leading-tight  mb-6'>
              Domine a Medicina com a{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary'>
                Estratégia Certa
              </span>
            </h1>
            <p className='text-lg md:text-xl text-brand-light/80 mb-10 max-w-2xl mx-auto lg:mx-0'>
              Na Precettore Code, sua dedicação encontra a estratégia.
              Transformamos seu volume de estudo em performance através da nossa
              metodologia validada. Estude com inteligência e garanta sua
              aprovação!
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
              <Link to='mentoria'>
                <button className='group relative w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-primary hover:bg-brand-primary/90 text-brand-dark px-6 py-4 md:px-10 md:py-6 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-1'>
                  Conhecer o método
                  <ArrowRight
                    size={24}
                    className='group-hover:translate-x-2 transition-transform'
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Lado Direito: Foto do Especialista com Glow */}
          <div className='flex-1 relative flex justify-center items-end'>
            <div className='absolute w-full h-[80%] bg-brand-primary/20 rounded-full blur-2xl animate-pulse bottom-10'></div>

            <div className='relative z-10 w-full max-w-lg lg:max-w-xl'>
              <img
                src={autoridadeRecorte}
                alt='Mentor Precettore'
                className='w-full h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] transform hover:scale-[1.02] transition-transform duration-500
                [mask-image:radial-gradient(ellipse_at_center,_black_50%,_transparent_100%)]
                [-webkit-mask-image:radial-gradient(ellipse_at_center,_black_50%,_transparent_85%)]'
              />

              {/* Badge Flutuante de Autoridade */}
              <div className='absolute bottom-32 -left-12 bg-brand-dark/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl hidden xl:block shadow-2xl'>
                <p className='text-brand-primary font-black text-sm uppercase tracking-widest'>
                  Dr. Carlos Augusto F. Correia
                </p>
                <p className='text-white/50 text-[10px] uppercase font-bold tracking-tighter'>
                  Médico Especialista em Clínica Médica
                </p>
                <p className='text-white/50 text-[10px] uppercase font-bold tracking-tighter'>
                  CRM/ES:10099 - RQE:12675
                </p>
                <p className='text-white/50 text-[10px] uppercase font-bold tracking-tighter'>
                  Aprovado em residência e em vários concursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
