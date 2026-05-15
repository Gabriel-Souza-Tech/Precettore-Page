import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
    .max(50, { message: 'O nome não pode passar de 50 caracteres.' }),
  phone: z
    .string()
    .min(1, { message: 'O telefone é obrigatório.' })
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
      message: 'Formato de telefone inválido ((00) 00000-0000).',
    }),
  mail: z.email('Digite um email válido'),
  message: z.string().max(100),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
