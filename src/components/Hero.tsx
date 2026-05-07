import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden'>
      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Lado Esquerdo: Textos e CTA */}
          <div className='flex-1 text-center lg:text-left z-10'>
            <span className='inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6'>
              Método Comprovado
            </span>
            <h1 className='text-4xl md:text-6xl font-black text-white leading-tight mb-6'>
              Domine a Medicina com a{' '}
              <span className='text-brand-primary'>Estratégia Certa</span>
            </h1>
            <p className='text-lg md:text-xl text-brand-light/80 mb-10 max-w-2xl mx-auto lg:mx-0'>
              A Precettore Aprova oferece o suporte necessário para transformar
              seu esforço em resultado real. Estude com quem entende de
              aprovação.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
              <button className='w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-brand-dark px-8 py-4 rounded-xl font-extrabold text-lg transition-all shadow-lg shadow-brand-primary/20'>
                Quero ser aprovado
              </button>
              <button className='w-full sm:w-auto border border-brand-secondary/30 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all'>
                Conhecer o método
              </button>
            </div>
          </div>

          {/* Lado Direito: Visual / Vídeo Mockup */}
          <div className='flex-1 relative w-full max-w-xl lg:max-w-none'>
            <div className='relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl'>
              {/* Espaço para o vídeo ou imagem principal */}
              <div className='aspect-video bg-slate-800 flex items-center justify-center group cursor-pointer'>
                <div className='w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center pl-1 transition-transform group-hover:scale-110'>
                  <svg
                    className='w-8 h-8 text-brand-dark'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M8 5v14l11-7z' />
                  </svg>
                </div>
                <img
                  src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
                  alt='Estudante de medicina'
                  className='absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay'
                />
              </div>
            </div>

            {/* Detalhe decorativo (Blur de fundo) */}
            <div className='absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-[120px] -z-10'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
