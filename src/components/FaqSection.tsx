import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: 'O cronograma é igual para todos?',
      answer:
        'Não. O seu cronograma é totalmente personalizado e adaptativo. A plataforma analisa seus erros e acertos continuamente para recalcular as suas prioridades de estudo com base nas suas dificuldades reais.',
    },
    {
      question: 'Preciso estudar muitas horas por dia?',
      answer:
        'Não necessariamente. A proposta do Precettore Code é aumentar a sua eficiência, não o seu volume de sofrimento. Focamos em direcionamento estratégico e inteligência de estudo para que você evolua mais em menos tempo.',
    },
    {
      question: 'A IA substitui os mentores?',
      answer:
        'Não. A IA Aris potencializa o seu dia a dia, tirando dúvidas 24/7, explicando temas complexos e simulando condutas. Ela funciona como um acelerador de aprendizado que complementa a direção estratégica da mentoria.',
    },
    {
      question: 'As aulas ficam gravadas?',
      answer:
        'Sim. Todas as aulas estratégicas semanais ao vivo ficam gravadas e são hospedadas imediatamente na plataforma para você assistir no seu próprio ritmo, onde e quando quiser.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-24 max-w-4xl mx-auto px-6 relative z-10'>
      {/* Cabeçalho */}
      <div className='text-center mb-16'>
        <span className='text-brand-primary font-black uppercase text-xs tracking-[0.2em] block mb-2'>
          Dúvidas Frequentes
        </span>
        <h2 className='text-3xl md:text-4xl font-black uppercase tracking-tight text-white'>
          Perguntas <span className='text-[#C5A47E]'>Respondidas</span>
        </h2>
      </div>

      {/* Lista de Accordions */}
      <div className='space-y-4'>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className='bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden transition-all duration-300'
            >
              {/* Botão da Pergunta */}
              <button
                onClick={() => toggleFaq(index)}
                className='w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:bg-white/[0.02] transition-all'
              >
                <span className='text-base md:text-lg tracking-wide'>
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#C5A47E] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Container da Resposta Dinâmica com Tailwind */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-40 border-t border-white/5' : 'max-h-0'
                }`}
              >
                <p className='p-6 text-white/60 text-sm md:text-base leading-relaxed bg-[#0A1622]/50'>
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default FaqSection;
