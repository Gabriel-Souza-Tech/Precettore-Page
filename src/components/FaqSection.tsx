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
      question: 'Quais as formas de pagamento?',
      answer:
        'A Precettore Code é uma assinatura mensal com renovação recorrente no cartão de crédito. Dessa forma, só compromete o limite mês a mês.',
    },
    {
      question: 'Além da mentoria tenho acesso aos cursos?',
      answer:
        'Sim. Além da Mentoria, você ainda terá acesso a PDFs e videoaulas; Livro; Monitor de Performance; Sistema de Questões; Cursos Exclusivos; Fórum de Dúvidas;Resumos; Mapas Mentais; Marcação dos Aprovados.',
    },
    {
      question: 'Existe um prazo de garantia',
      answer:
        'Você possui 14 dias para testar a nossa plano. Caso não atenda às suas expectativas, devolveremos seu dinheiro sem complicações.',
    },
    {
      question: 'Qual a periodicidade das reuniões?',
      answer:
        'Na Precettore Code você terá reuniões individuais a cada 4 semanas e reuniões em grupo a cada 15 dias.',
    },
    {
      question:
        'Adquiri a Assinatura Precettore Code. E agora, como tenho acesso ao Mentor?',
      answer:
        'Assim que confirmar o pagamento da compra da sua Assinatura, você receberá um e-mail com o link de um formulário.Você será instruído a preencher o FDI (Formulário de Diagnóstico Inicial). O FDI vai solicitar informações sobre os seus estudos (objetivo, histórico, etc), sua rotina (quantas horas tem disponível por semana, se trabalha e estuda etc), além de minissimulados;',
    },
    {
      question: 'Como o Mentor monta a minha cronograma?',
      answer:
        'Baseado em seu preenchimento do FDI e nas informações trocadas na primeira reunião individual, ele irá montar um planejamento de estudos individualizado com metas diárias. Que irá conciliar seu histórico, seus objetivos e sua carga horária disponível. Mesclando ações de estudo teórico, revisões e exercícios, conforme o avanço.',
    },
    {
      question: 'Preenchi o FDI, em quanto tempo terei contato do Mentor?',
      answer:
        'Em 36hs do envio do formulário, o Mentor irá entrar em contato para agendar a primeira reunião individual.',
    },
    {
      question: 'Por que contratar a Mentoria da Precettore Code?',
      answer:
        'A Mentoria da Precettore Code é acompanhamento individualizado feito por um médico especialista com histórico de aprovação diversos concursos (residências médicas, concursos públicos  e provas de tititulo de especialista) e está habilitado a ajudar outros alunos na organização dos estudos. O que ocorre tanto pela identificação de problemas e vulnerabilidades como também na ajuda na definição de “como” e “o quê” deve ser estudado para ter resultados mais rápidos. Aqui na Precettore Code, o Mentor para é um dos principais diferenciais da nossa Assinatura e que irá caminhar com você indicando o melhor caminho a seguir até sua aprovação.',
    },
    {
      question: 'Qual a periodicidade das reuniões?',
      answer:
        'Na Precettore Code você terá reuniões individuais a cada 4 semanas e reuniões em grupo a cada 15 dias.',
    },
    {
      question: 'Qual a periodicidade das reuniões?',
      answer:
        'Na Precettore Code você terá reuniões individuais a cada 4 semanas e reuniões em grupo a cada 15 dias.',
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
