import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  ContactFormSchema,
} from '../schemas/contactFormSchema';
import { phoneMask } from '../utils/masks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustInfo from '../components/TrustInfo';
import { MessageCircle, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      mail: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    console.log('Dados validados e prontos para o Node:', data);

    // temporario para quando tiver o envio para API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Mensagem enviada com sucesso!');
    reset();
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue('phone', phoneMask(value), { shouldValidate: true });
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
              <div className='bg-white/3 border border-white/5 p-8 rounded-3xl'>
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
              <div className='bg-white/3 border border-white/5 p-8 md:p-10 rounded-3xl'>
                <h2 className='text-xl font-bold text-white mb-8 uppercase tracking-widest'>
                  Nos envie uma mensagem
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='grid md:grid-cols-2 gap-6'
                >
                  {/* Campo Nome */}
                  <div className='flex flex-col gap-2'>
                    <input
                      {...register('name')}
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

                  {/* Campo Telefone com Máscara Integrada */}
                  <div className='flex flex-col gap-2'>
                    <input
                      {...register('phone')}
                      onChange={handlePhoneChange}
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

                  {/* Campo E-mail */}
                  <div className='md:col-span-2 flex flex-col gap-2'>
                    <input
                      {...register('mail')}
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

                  {/* Campo Mensagem */}
                  <div className='md:col-span-2 flex flex-col gap-2'>
                    <textarea
                      {...register('message')}
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

                  {/* Botão de Envio */}
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
