import React from 'react';
import {
  ShieldCheck,
  Calendar,
  CreditCard,
  Users,
  Sparkles,
} from 'lucide-react';

export type PlanType = {
  name: string;
  access: string;
  mentorship: string;
  installments: string;
  value: string;
  total: string;
  highlight: boolean;
};

interface PricingPlansProps {
  plans: PlanType[];
}

const PricingPlans: React.FC<PricingPlansProps> = ({ plans }) => {
  return (
    <section id='planos' className='py-24 bg-brand-dark overflow-hidden'>
      <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
        {/* Cabeçalho da Seção */}
        <div className='text-center mb-20'>
          <div className='inline-block px-4 py-1 border border-[#C5A47E]/30 rounded-full mb-6'>
            <span className='text-[#C5A47E] text-xs font-black uppercase tracking-[0.3em] animate-pulse'>
              Vagas Limitadas
            </span>
          </div>
          <h2 className='text-white text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4'>
            Precettore <span className='text-[#C5A47E]'>APROVA</span>
          </h2>
          <p className='font-serif italic text-[#C5A47E] text-xl md:text-2xl opacity-80'>
            temos 2 formatos exclusivos para você
          </p>
        </div>

        {/* Grid de Planos usando a prop 'plans' */}
        <div className='grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group p-0.5 rounded-sm transition-all duration-500 ${
                plan.highlight
                  ? 'bg-linear-to-b from-[#C5A47E] to-transparent shadow-2xl shadow-[#C5A47E]/10'
                  : 'bg-white/10'
              }`}
            >
              <div className='bg-[#0A1622] p-8 md:p-12 h-full flex flex-col relative overflow-hidden'>
                {/* Marcas d'água e Cantoneiras */}
                <ShieldCheck className='absolute -right-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12 pointer-events-none' />
                <div className='absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C5A47E]/30'></div>
                <div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5A47E]/30'></div>

                {/* Título e Acompanhamento */}
                <div className='mb-10 relative z-10'>
                  <h3 className='text-[#C5A47E] text-3xl md:text-4xl font-black uppercase tracking-tight mb-4'>
                    {plan.name}
                  </h3>
                  <div className='flex flex-col gap-3 text-white/60 font-bold text-sm border-b border-white/10 pb-8'>
                    <div className='flex items-center gap-2'>
                      <Calendar size={16} className='text-[#C5A47E]' />
                      {plan.access}
                    </div>
                    <div className='flex items-center gap-2 text-brand-primary'>
                      <Users size={16} />
                      MENTORIAS: {plan.mentorship}
                    </div>
                    {plan.name === 'Mentoria Exclusive' ? (
                      <div className='flex items-center gap-2 text-brand-primary'>
                        <Sparkles size={16} />
                        INCLUSO: IA NO TREINAMENTO
                      </div>
                    ) : (
                      <div
                        className='flex items-center gap-2 opacity-0'
                        aria-hidden='true'
                      >
                        <Sparkles size={16} />
                        ESPAÇADOR INVISÍVEL
                      </div>
                    )}
                  </div>
                </div>

                {/* Preços High-Ticket */}
                <div className='mb-12 relative z-10'>
                  <p className='text-white/80 text-sm uppercase font-bold tracking-widest mb-2 flex items-center gap-2'>
                    <CreditCard size={14} className='text-[#C5A47E]' />
                    Investimento em até {plan.installments}
                  </p>
                  <div className='flex items-baseline gap-2 mb-4'>
                    <span className='text-[#C5A47E] text-3xl font-black'>
                      R$
                    </span>
                    <span className='text-[#C5A47E] text-6xl lg:text-8xl font-black tracking-tighter'>
                      {plan.value}
                    </span>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-white/40 text-xs font-bold uppercase tracking-widest'>
                      Valor Total: R$ {plan.total}
                    </p>
                  </div>
                </div>

                {/* Botão de Agendamento */}
                <button
                  className={`mt-auto w-full py-5 rounded-sm font-black uppercase tracking-[0.2em] transition-all relative z-10 ${
                    plan.highlight
                      ? 'bg-[#C5A47E] text-brand-dark hover:bg-[#DBC1A0] shadow-lg shadow-[#C5A47E]/20'
                      : 'border-2 border-[#C5A47E] text-[#C5A47E] hover:bg-[#C5A47E]/10'
                  }`}
                >
                  Agende sua entrevista
                </button>
                <p className='text-center text-[10px] text-white/30 uppercase mt-4 tracking-widest'>
                  Seleção por perfil de aluno
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className='text-center text-white/20 text-xs mt-16 uppercase tracking-[0.4em]'>
          Sistema de Aprovação Precettore • Metodologia Registrada
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
