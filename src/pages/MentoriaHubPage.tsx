import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TutorySection from '../components/TutorySection';
import FaqSection from '../components/FaqSection';
import { ArrowRight } from 'lucide-react';
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
              Mentoria Inteligente
            </span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6'>
            Precettore{' '}
            <span className='bg-linear-to-r from-brand-primary to-cyan-400 bg-clip-text text-transparent'>
              Code
            </span>
          </h1>
          <p className='text-brand-light/60 text-lg md:text-xl max-w-3xl mx-auto mb-10'>
            Uma mentoria que une cronograma personalizado, plataforma
            inteligente, inteligência artificial e acompanhamento real de
            evolução para acelerar sua aprovação.
          </p>
          <a
            href='#trilhas'
            className='inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black px-8 py-4 rounded-full transition-all uppercase tracking-wider text-sm shadow-xl shadow-orange-900/20'
          >
            Escolha seu plano <ArrowRight size={16} />
          </a>
        </section>

        {/* SEÇÃO 2: COMPONENTE TUTORY */}
        <TutorySection />

        {/* SEÇÃO 3: JORNADA DO ALUNO (TIMELINE) */}
        <section className='py-24 bg-[#0A1622]/50 border-b border-white/5'>
          <div className='max-w-4xl mx-auto px-6 md:px-10 lg:px-18'>
            <div className='text-center mb-16'>
              <span className='text-brand-primary font-black uppercase text-xs tracking-[0.2em] block mb-2'>
                O Seu Dia Zero
              </span>
              <h2 className='text-3xl md:text-5xl font-black uppercase tracking-tight mb-4'>
                Passos após entrar na{' '}
                <span className='text-[#C5A47E]'>Mentoria</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className='relative border-l-2 border-brand-primary/20 ml-4 md:ml-8 space-y-12'>
              {/* Passo 1 */}
              <div className='relative pl-10 md:pl-16'>
                <div className='absolute -left-5.25 top-0 w-10 h-10 bg-brand-dark border-2 border-brand-primary rounded-full flex items-center justify-center font-black text-brand-primary shadow-[0_0_15px_rgba(var(--color-brand-primary),0.3)]'>
                  1
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide'>
                  Formulário de Diagnóstico Inicial (FDI)
                </h3>
                <p className='text-white/60 leading-relaxed text-sm md:text-base'>
                  Preencha todo o FDI para que o mentor conheça o seu perfil
                  (carga horária, objetivo, dificuldades e histórico). Esse é o
                  ponto de partida para sua personalização.
                </p>
              </div>

              {/* Passo 2 */}
              <div className='relative pl-10 md:pl-16'>
                <div className='absolute -left-5.25 top-0 w-10 h-10 bg-brand-dark border-2 border-brand-primary rounded-full flex items-center justify-center font-black text-brand-primary shadow-[0_0_15px_rgba(var(--color-brand-primary),0.3)]'>
                  2
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide'>
                  Simulado de Nivelamento
                </h3>
                <p className='text-white/60 leading-relaxed text-sm md:text-base'>
                  Nossos simulados avaliam seu nível de conhecimento atual com
                  precisão, identificando lacunas de forma inteligente.
                </p>
              </div>

              {/* Passo 3 */}
              <div className='relative pl-10 md:pl-16'>
                <div className='absolute -left-5.25 top-0 w-10 h-10 bg-brand-dark border-2 border-brand-primary rounded-full flex items-center justify-center font-black text-brand-primary shadow-[0_0_15px_rgba(var(--color-brand-primary),0.3)]'>
                  3
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide'>
                  Reunião Individual com o Mentor
                </h3>
                <p className='text-white/60 leading-relaxed text-sm md:text-base'>
                  Este é um dos momentos mais importantes. Na primeira reunião,
                  o Mentor elabora seu planejamento estratégico e seu primeiro
                  cronograma de estudos sob medida.
                </p>
              </div>

              {/* Passo 4 */}
              <div className='relative pl-10 md:pl-16'>
                <div className='absolute -left-5.25 top-0 w-10 h-10 bg-brand-dark border-2 border-brand-primary rounded-full flex items-center justify-center font-black text-brand-primary shadow-[0_0_15px_rgba(var(--color-brand-primary),0.3)]'>
                  4
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide'>
                  Acompanhamento Constante
                </h3>
                <p className='text-white/60 leading-relaxed text-sm md:text-base'>
                  Tenha contato direto com seu Mentor através da comunidade
                  Precettore Code no WhatsApp para tirar dúvidas e dar
                  feedbacks. Essa proximidade garante que você avance com
                  segurança e sem cometer erros comuns.
                </p>
              </div>

              {/* Passo 5 */}
              <div className='relative pl-10 md:pl-16'>
                <div className='absolute -left-5.25 top-0 w-10 h-10 bg-brand-dark border-2 border-brand-primary rounded-full flex items-center justify-center font-black text-brand-primary shadow-[0_0_15px_rgba(var(--color-brand-primary),0.3)]'>
                  5
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide'>
                  Médico de Alta Performance
                </h3>
                <p className='text-white/60 leading-relaxed text-sm md:text-base'>
                  Evolua para um nível onde o aprendizado é fluido, o acerto de
                  questões em simulados aumenta e a constância se torna parte da
                  sua rotina.
                </p>
              </div>
            </div>

            {/* Fechamento da Seção */}
            <div className='mt-16 bg-linear-to-r from-brand-primary/10 to-cyan-400/5 border border-brand-primary/20 p-8 md:p-10 rounded-2xl text-center'>
              <h3 className='text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2'>
                Sua única preocupação será estudar.
              </h3>
              <p className='text-brand-light/80 text-lg italic font-serif'>
                Deixe a estratégia e a direção com a Precettore Code.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: PLANOS */}
        <section
          id='trilhas'
          className='py-24 bg-white/2 border-y border-white/5'
        >
          <div className='max-w-360 mx-auto  px-4 md:px-10 lg:px-18'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-5xl font-black uppercase tracking-tight mb-4'>
                Inteligência aplicada a sua aprovação
              </h2>
              <p className='text-white/40 font-serif italic text-lg'>
                Escolha o plano que adapte a sua necessidade
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
                <Link to='/mentoria-pre-edital'>
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
                <Link to='/mentoria-pos-edital'>
                  <button className='w-full py-4 bg-white/5 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300 font-bold uppercase tracking-wider text-xs rounded-lg'>
                    Conhecer Formato Pós-Edital
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: FAQ */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default MentoriaHubPage;
