import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCurriculum from '../components/CourseCurriculum'; // Reutilizaremos o componente detalhado
import { Award, BookOpen, CheckCircle } from 'lucide-react';

const TrilhaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-brand-dark flex flex-col'>
      <Header />

      <main className='grow pt-10'>
        {/* HERO DA PÁGINA INTERNA */}
        <section className='py-20 bg-linear-to-b from-brand-primary/5 to-transparent'>
          <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
            <div className='max-w-4xl'>
              <span className='text-brand-primary font-black uppercase tracking-[0.3em] text-sm'>
                Core do Produto
              </span>
              <h1 className='text-6xl md:text-8xl font-black text-white tracking-tighter mt-6 mb-8'>
                Trilha Domínio <br />
                <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary'>
                  INEP – 1ª Fase
                </span>
              </h1>
              <p className='text-xl text-brand-light/70 leading-relaxed'>
                A estratégia definitiva para quem não quer apenas estudar, mas
                ser aprovado. Um método focado em como a banca pensa e como o
                seu raciocínio clínico deve ser moldado.
              </p>
            </div>
          </div>
        </section>

        {/* COMPONENTE DE CURRÍCULO (Aquele que detalhamos com Módulos e Especialidades) */}
        <CourseCurriculum />

        {/* SEÇÃO DE ENTREGA (O QUE O ALUNO RECEBE) */}
        <section className='py-24 border-t border-white/5'>
          <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
            <div className='grid md:grid-cols-3 gap-12'>
              <div className='flex flex-col gap-4'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary'>
                  <BookOpen size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase'>
                  Material Base
                </h4>
                <p className='text-brand-light/60'>
                  Aulas direto ao ponto, focadas no que realmente cai, sem perda
                  de tempo com teorias irrelevantes.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary'>
                  <Award size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase'>
                  Treinamento de Elite
                </h4>
                <p className='text-brand-light/60'>
                  Questões comentadas padrão INEP e Simulados que replicam a
                  pressão do dia da prova.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary'>
                  <CheckCircle size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase'>
                  Memorização
                </h4>
                <p className='text-brand-light/60'>
                  Flashcards de repetição espaçada e mapas mentais para fixação
                  do conteúdo core.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrilhaPage;
