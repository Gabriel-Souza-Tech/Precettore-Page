import React from 'react';
import {
  Brain,
  ChevronRight,
  Activity,
  Stethoscope,
  ShieldAlert,
  Droplets,
  Zap,
} from 'lucide-react';

const CourseCurriculum: React.FC = () => {
  const algoritmoSteps = [
    'Identificar síndrome clínica',
    'Definir prioridade (urgência vs eletivo)',
    'Excluir diagnósticos improváveis',
    'Reconhecer padrão clássico',
    'Escolher conduta mais segura',
  ];

  const especialidades = [
    {
      title: 'Cardiologia',
      icon: <Activity className='text-brand-primary' />,
      topics: ['SCA', 'IC', 'Arritmias', 'HAS'],
    },
    {
      title: 'Pneumologia',
      icon: <Stethoscope className='text-brand-primary' />,
      topics: ['Pneumonia', 'DPOC', 'Asma', 'TEP'],
    },
    {
      title: 'Infectologia',
      icon: <ShieldAlert className='text-brand-primary' />,
      topics: ['Sepse', 'Antibióticos', 'HIV', 'ITU'],
    },
    {
      title: 'Nefrologia',
      icon: <Droplets className='text-brand-primary' />,
      topics: ['IRA', 'DRC', 'Distúrbios eletrolíticos'],
    },
    {
      title: 'Emergências',
      icon: <Zap className='text-brand-primary' />,
      topics: ['Choque', 'PCR', 'Intoxicações'],
    },
  ];

  return (
    <section className='pt-12 md:pt-16  bg-brand-dark'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
        {/* MÓDULO 1: FUNDAMENTOS E ALGORITMO */}
        <div className='mb-32'>
          <h2 className='text-brand-primary font-black uppercase tracking-[0.3em] text-sm mb-12 text-center lg:text-left'>
            Módulo 1 – Fundamentos Estratégicos
          </h2>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Esquerda: Aulas Teóricas */}
            <div className='space-y-8'>
              <div className='bg-white/5 p-8 rounded-3xl border border-white/10'>
                <h4 className='text-2xl font-black text-white uppercase mb-6 flex items-center gap-3'>
                  <Brain className='text-brand-primary' /> A base do método
                </h4>
                <ul className='space-y-6'>
                  <li className='flex items-start gap-4'>
                    <span className='bg-brand-primary/20 text-brand-primary font-bold px-3 py-1 rounded text-xs mt-1'>
                      Aula 01
                    </span>
                    <div>
                      <p className='text-white font-bold'>Como a banca pensa</p>
                      <p className='text-brand-light/50 text-sm italic'>
                        Perfil de questões, padrões de cobrança e pegadinhas.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <span className='bg-brand-primary text-brand-dark font-bold px-3 py-1 rounded text-xs mt-1'>
                      Aula 02
                    </span>
                    <div>
                      <p className='text-brand-primary font-bold uppercase tracking-tight'>
                        Algoritmo Precettore
                      </p>
                      <p className='text-brand-light/50 text-sm italic'>
                        A estrutura mental para decisão rápida em prova.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <span className='bg-brand-primary/20 text-brand-primary font-bold px-3 py-1 rounded text-xs mt-1'>
                      Aula 03
                    </span>
                    <div>
                      <p className='text-white font-bold'>Erros clássicos</p>
                      <p className='text-brand-light/50 text-sm italic'>
                        Excesso de teoria vs. Falta de interpretação.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direita: Visualização do Algoritmo */}
            <div className='relative'>
              <div className='bg-gradient-to-b from-brand-primary/10 to-transparent p-8 rounded-3xl border border-brand-primary/20'>
                <h4 className='text-sm font-black text-brand-primary uppercase tracking-widest mb-8'>
                  O Algoritmo em 5 Passos:
                </h4>
                <div className='space-y-4'>
                  {algoritmoSteps.map((step, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-4 bg-brand-dark/80 p-4 rounded-xl border border-white/5 transition-transform hover:translate-x-2'
                    >
                      <span className='w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-brand-dark font-black'>
                        {index + 1}
                      </span>
                      <span className='text-white font-medium'>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MÓDULO 2: ESPECIALIDADES */}
        <div>
          <div className='text-center lg:text-left mb-16'>
            <h2 className='text-brand-primary font-black uppercase tracking-[0.3em] text-sm mb-8'>
              Módulo 2 – Trilhas por Especialidade
            </h2>
            <h3 className='text-4xl md:text-5xl font-black text-white tracking-tighter uppercase'>
              Clínica na veia:{' '}
              <span className='text-brand-secondary'>Raciocínio Direto</span>
            </h3>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
            {especialidades.map((esp, i) => (
              <div
                key={i}
                className='bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-primary/40 transition-all group'
              >
                <div className='mb-4 group-hover:scale-110 transition-transform'>
                  {esp.icon}
                </div>
                <h5 className='text-lg font-black text-white uppercase mb-4 tracking-tight'>
                  {esp.title}
                </h5>
                <ul className='space-y-2'>
                  {esp.topics.map((topic, idx) => (
                    <li
                      key={idx}
                      className='text-brand-light/40 text-sm flex items-center gap-2'
                    >
                      <ChevronRight
                        size={14}
                        className='text-brand-secondary'
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
