import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingPlans from '../components/PricingPlans';
import TrustInfo from '../components/TrustInfo';
import {
  BookOpen,
  Database,
  MessagesSquare,
  Calendar,
  CheckCircle,
} from 'lucide-react';

const MentoriaPosEdital: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const preEditalPlans = [
    {
      name: 'Precettore Code 6',
      access: '6 meses de acesso',
      mentorship: 'Inviduais a cada mês e em grupo a cada 15 dias',
      artificialIntelligence: 'IA Aris no Período de 6 meses',
      installments: '6x',
      value: '259,90',
      total: '1.559,400',
      highlight: false,
    },
    {
      name: 'Precettore Code 12',
      access: '12 meses de acesso',
      mentorship: 'Inviduais a cada mês e em grupo a cada 15 dias',
      artificialIntelligence: 'IA Aris no Período de 12 meses',
      installments: '12x',
      value: '249,90',
      total: '2.998,80',
      highlight: true,
    },
  ];

  return (
    <div className='min-h-screen bg-brand-dark flex flex-col text-white'>
      <Header />

      <main className='grow'>
        {/* HERO DA PÁGINA INTERNA */}
        <section className='pt-32 pb-16 bg-linear-to-b from-brand-primary/5 to-transparent'>
          <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
            <div className='max-w-4xl'>
              <span className='text-brand-primary font-black uppercase tracking-[0.3em] text-sm'>
                Construção de Base Sólida
              </span>
              <h1 className='text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 mb-8 uppercase'>
                Mentoria Code
                <br />
                <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-cyan-400'>
                  Pre-Edital
                </span>
              </h1>
              <p className='text-lg md:text-xl text-brand-light/70 leading-relaxed max-w-3xl'>
                Desenvolva uma base teórica robusta e sólida antes da abertura
                do edital. Indicada para médicos e estudantes de medicina que
                desejam mais tempo em sua preparação, que precisam de organizar
                seu cronograma de estudo com mais antecedência, personalização e
                consolidar o conteúdo sem pressa. Aumentando de forma
                exponencial as chances de aprovação na primeira tentativa.
              </p>

              <div className='mt-6 flex flex-wrap gap-4 text-xs md:text-sm font-bold uppercase tracking-wider text-brand-primary/80'></div>
            </div>
          </div>
        </section>
        {/* SEÇÃO DE ENTREGA (Os 3 Pilares Tecnológicos do Espelho) */}
        <section className='py-24 border-white/5'>
          <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
            <div className='grid md:grid-cols-3 gap-12 mx-auto'>
              {/* Card 1: Planejamento */}
              <div className='flex flex-col gap-4 group'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300'>
                  <BookOpen size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase tracking-wide'>
                  Planner Individualizado
                </h4>
                <p className='text-brand-light/60 text-sm leading-relaxed'>
                  Metas diárias e semanais contendo tarefas teóricas
                  direcionadas, revisões finais e 350 resumos estratégicos em
                  texto e vídeo de 20 especialidades médicas.
                </p>
              </div>

              {/* Card 2: Banco de Dados */}
              <div className='flex flex-col gap-4 group'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300'>
                  <Database size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase tracking-wide'>
                  +200k Questões
                </h4>
                <p className='text-brand-light/60 text-sm leading-relaxed'>
                  Acesso completo ao banco inteligente. Mais de 108 mil questões
                  comentadas alternativa por alternativa e 75 mil resoluções em
                  vídeo por professores especialistas.
                </p>
              </div>

              {/* Card 3: Ecossistema de Suporte */}
              <div className='flex flex-col gap-4 group'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300'>
                  <MessagesSquare size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase tracking-wide'>
                  Suporte VIP & Mentoria
                </h4>
                <p className='text-brand-light/60 text-sm leading-relaxed'>
                  Contato diário individualizado com seu mentor via WhatsApp
                  para ajuste de rotina, além de salas VIP ao vivo para controle
                  de performance e inteligência emocional.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* FECHAMENTO DE CONVERSÃO */}
        <PricingPlans plans={preEditalPlans} />;
        {/* SEÇÃO FALE CONOSCO (TRUST INFO) */}
        <TrustInfo />
      </main>

      <Footer />
    </div>
  );
};

export default MentoriaPosEdital;
