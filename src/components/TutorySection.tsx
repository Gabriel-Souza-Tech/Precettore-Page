import React from 'react';
import {
  LayoutDashboard,
  RefreshCw,
  BrainCircuit,
  ShieldAlert,
} from 'lucide-react';

const TutorySection: React.FC = () => {
  const features = [
    {
      icon: <LayoutDashboard className='text-brand-primary' size={28} />,
      title: 'Dashboard de Performance',
      description:
        'Esqueça o estudo emocional. Visualize sua evolução semanal, desempenho exato por especialidade, índice de retenção e curva de aprendizado real.',
    },
    {
      icon: <RefreshCw className='text-cyan-400' size={28} />,
      title: 'Cronograma Adaptativo',
      description:
        'A plataforma analisa seus erros continuamente. Se você falhar em Pediatria, seu cronograma se reorganiza automaticamente focando nas suas dificuldades reais.',
    },
    {
      icon: <BrainCircuit className='text-purple-400' size={28} />,
      title: 'Flashcards Inteligentes',
      description:
        'Baseado em neuroaprendizagem e repetição espaçada. O sistema identifica o que você está prestes a esquecer e programa a revisão no momento perfeito.',
    },
  ];

  return (
    <section className='py-24 max-w-360 mx-auto  px-4 md:px-10 lg:px-18'>
      <div className='grid lg:grid-cols-12 gap-12 items-center mb-16'>
        <div className='lg:col-span-5'>
          <span className='text-brand-primary font-black uppercase text-xs tracking-[0.2em] block mb-2'>
            Tecnologia de Ponta
          </span>
          <h2 className='text-3xl md:text-4xl font-black uppercase tracking-tight mb-4'>
            A Experiência Tutory
          </h2>
          <p className='text-white/60 text-sm leading-relaxed'>
            O <span className='text-white font-bold'>Precettore Code</span> não
            te entrega apenas PDFs ou aulas gravadas soltas. Toda a sua
            preparação é gerenciada pela inteligência de dados da plataforma
            Tutory.
          </p>
        </div>
        <div className='lg:col-span-7 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6 flex items-start gap-4'>
          <ShieldAlert className='text-brand-primary shrink-0 mt-1' size={20} />
          <p className='text-xs md:text-sm text-brand-light/80 font-medium leading-relaxed'>
            A maioria dos médicos reprova no Revalida por falta de diagnóstico
            dos próprios erros. Na Tutory, cada questão resolvida molda sua
            estratégia do dia seguinte.
          </p>
        </div>
      </div>

      {/* Grid de Funcionalidades */}
      <div className='grid md:grid-cols-3 gap-6 relative z-10'>
        {features.map((feat, index) => (
          <div
            key={index}
            className='bg-white/2 border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-all'
          >
            {/* Cantoneira Decorativa Discreta */}
            <div className='absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-brand-primary/30 transition-all'></div>

            <div className='mb-6 bg-white/2 p-4 rounded-xl inline-block'>
              {feat.icon}
            </div>
            <h3 className='text-xl font-bold text-white mb-3 uppercase tracking-wide'>
              {feat.title}
            </h3>
            <p className='text-white/50 text-xs md:text-sm leading-relaxed'>
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TutorySection;
