import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustInfo from '../components/TrustInfo'; // O componente que acabamos de criar
import { MessageCircle, Mail, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  name: string;
  phone: string;
  mail: string;
  message: string;
};

const ContactPage: React.FC = () => {
  // Variaveis do React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Enviando dados...', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Mensagem enviada com sucesso!');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-brand-dark flex flex-col'>
      <Header />

      <main className='grow pt-24'>
        <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20 pb-24'>
          {/* Cabeçalho da Página */}
          <div className='mb-12'>
            <h1 className='text-4xl md:text-5xl font-black text-white mb-4'>
              Fale Conosco
            </h1>
            <p className='text-brand-light/60 max-w-2xl text-lg'>
              Dúvidas gerais ou de treinamentos, sugestões, elogios e
              reclamações, mande uma mensagem para a gente.
            </p>
          </div>

          <div className='grid lg:grid-cols-12 gap-8 items-start'>
            {/* Coluna Esquerda: Contatos Diretos (4 colunas) */}
            <div className='lg:col-span-4 space-y-6'>
              <div className='bg-white/[0.03] border border-white/5 p-8 rounded-3xl'>
                <h2 className='text-xl font-bold text-white mb-8 uppercase tracking-widest'>
                  Contatos
                </h2>

                {/* Bloco WhatsApp */}
                <div className='mb-10'>
                  <div className='flex items-center gap-3 text-white mb-2'>
                    <MessageCircle className='text-brand-primary' size={24} />
                    <span className='font-bold text-lg'>WhatsApp</span>
                  </div>
                  <p className='text-white/40 text-sm mb-4'>
                    Tel: (11) 93244-3698
                  </p>
                  <button className='w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-dark font-black py-3 rounded-xl transition-all uppercase text-sm tracking-tighter'>
                    Enviar mensagem
                  </button>
                </div>

                {/* Bloco E-mail */}
                <div className='mb-6'>
                  <div className='flex items-center gap-3 text-white mb-2'>
                    <Mail className='text-brand-primary' size={24} />
                    <span className='font-bold text-lg'>E-mail:</span>
                  </div>
                  <a
                    href='mailto:contato@precettore.com.br'
                    className='text-brand-primary hover:underline text-sm break-all'
                  >
                    contato@precettore.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Formulário (8 colunas) */}
            <div className='lg:col-span-8'>
              <div className='bg-white/[0.03] border border-white/5 p-8 md:p-10 rounded-3xl'>
                <h2 className='text-xl font-bold text-white mb-8 uppercase tracking-widest'>
                  Nos envie uma mensagem
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='grid md:grid-cols-2 gap-6'
                >
                  <div className='flex flex-col gap-2'>
                    <input
                      {...register('name', {
                        required: 'O nome e obrigatorio',
                      })}
                      type='text'
                      placeholder='Seu nome completo'
                      className={`bg-white text-brand-dark px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all font-medium ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-brand-primary'}`}
                    />
                    {errors.name && (
                      <span className='text-red-500 text-xs mt-1'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <input
                      {...register('phone', {
                        required: 'O numero e obrigatorio',
                        pattern: {
                          value: /^[0-9]+$/,
                          message: 'Por favor, insira apenas números',
                        },
                      })}
                      type='text'
                      placeholder='Telefone com DDD'
                      className={`bg-white text-brand-dark px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all font-medium ${errors.phone ? 'ring-2 ring-red-500' : 'focus:ring-brand-primary'}`}
                    />
                    {errors.phone && (
                      <span className='text-red-500 text-xs mt-1'>
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className='md:col-span-2 flex flex-col gap-2'>
                    <input
                      {...register('mail', {
                        required: 'O email e obrigatorio',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: 'Digite um e-mail válido',
                        },
                      })}
                      type='email'
                      placeholder='Seu melhor e-mail'
                      className={`bg-white text-brand-dark px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all font-medium ${errors.mail ? 'ring-2 ring-red-500' : 'focus:ring-brand-primary'}`}
                    />
                    {errors.mail && (
                      <span className='text-red-500 text-xs mt-1'>
                        {errors.mail.message}
                      </span>
                    )}
                  </div>
                  <div className='md:col-span-2 flex flex-col gap-2'>
                    <textarea
                      {...register('message', {
                        required: 'A menssagem e obrigatoria',
                      })}
                      rows={4}
                      placeholder='Escreva sua mensagem...'
                      className={`bg-white text-brand-dark px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all font-medium resize-none ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-brand-primary'}`}
                    />
                    {errors.message && (
                      <span className='text-red-500 text-xs mt-1'>
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <div className='md:col-span-2'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3 bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black px-10 py-4 rounded-full transition-all uppercase tracking-widest shadow-xl shadow-orange-900/20'
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                      {!isSubmitting && (
                        <Send
                          size={18}
                          className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
                        />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <TrustInfo />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
