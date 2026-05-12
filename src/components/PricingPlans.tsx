import React from 'react';
import { ShieldCheck, Calendar, CreditCard } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: 'Extensivo ENAMED',
      date: '31/01/2027',
      installments: '12x',
      value: '491,58',
      recurrent: '6 meses',
      total: '5.898,90',
      highlight: false,
    },
    {
      name: 'Programado ENAMED',
      date: '31/01/2028',
      installments: '18x',
      value: '499,94',
      recurrent: '9 meses',
      total: '8.998,90',
      highlight: true,
    },
  ];

  return (
    <section id='planos' className='py-24 bg-brand-dark overflow-hidden'>
      <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
        {/* Cabeçalho da Seção */}
        <div className='text-center mb-20'>
          <h2 className='text-white text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4'>
            Precettore <span className='text-[#C5A47E]'>ENAMED</span>
          </h2>
          <p className='font-serif italic text-[#C5A47E] text-xl md:text-2xl opacity-80'>
            temos 2 formatos exclusivos para você
          </p>
        </div>

        {/* Grid de Planos */}
        <div className='grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group p-[2px] rounded-sm transition-all duration-500 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#C5A47E] to-transparent'
                  : 'bg-white/10'
              }`}
            >
              {/* O Card Interno */}
              <div className='bg-[#0A1622] p-8 md:p-12 h-full flex flex-col relative overflow-hidden'>
                {/* Ícone de fundo (Marca d'água médica) */}
                <ShieldCheck className='absolute -right-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12 pointer-events-none' />

                {/* Cantoneiras Decorativas (Estilo ENAMED) */}
                <div className='absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C5A47E]/30'></div>
                <div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5A47E]/30'></div>
                <div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C5A47E]/30'></div>
                <div className='absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C5A47E]/30'></div>

                {/* Título e Acesso */}
                <div className='mb-10 relative z-10'>
                  <h3 className='text-[#C5A47E] text-3xl md:text-4xl font-black uppercase tracking-tight mb-2'>
                    {plan.name}
                  </h3>
                  <div className='flex items-center gap-2 text-white/60 font-bold tracking-widest text-sm border-b border-white/10 pb-6'>
                    <Calendar size={16} className='text-[#C5A47E]' />
                    ACESSO ATÉ: {plan.date}
                  </div>
                </div>

                {/* Preços */}
                <div className='mb-12 relative z-10'>
                  <p className='text-white/80 text-sm uppercase font-bold tracking-widest mb-2 flex items-center gap-2'>
                    <CreditCard size={14} className='text-[#C5A47E]' />
                    Por até {plan.installments} no cartão
                  </p>
                  <div className='flex items-baseline gap-2 mb-4'>
                    <span className='text-[#C5A47E] text-3xl font-black'>
                      R$
                    </span>
                    <span className='text-[#C5A47E] text-7xl md:text-8xl font-black tracking-tighter'>
                      {plan.value}
                    </span>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-white/60 text-sm italic'>
                      ou pagamento recorrente até {plan.recurrent}
                    </p>
                    <p className='text-white/40 text-xs font-bold'>
                      ou R$ {plan.total} à vista
                    </p>
                  </div>
                </div>

                {/* Botão de Ação */}
                <button
                  className={`mt-auto w-full py-5 rounded-sm font-black uppercase tracking-[0.2em] transition-all relative z-10 ${
                    plan.highlight
                      ? 'bg-[#C5A47E] text-brand-dark hover:bg-[#DBC1A0]'
                      : 'border-2 border-[#C5A47E] text-[#C5A47E] hover:bg-[#C5A47E]/10'
                  }`}
                >
                  Quero este plano
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de rodapé sutil */}
        <p className='text-center text-white/20 text-xs mt-16 uppercase tracking-[0.4em]'>
          Sistema de Aprovação Precettore • Metodologia Registrada
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
