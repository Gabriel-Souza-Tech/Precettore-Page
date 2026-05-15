// Aplica uma máscara de telefone brasileiro (DDD + 9 dígitos) em uma string.

export const phoneMask = (value: string) => {
  if (!value) return '';

  let digits = value.replace(/\D/g, '');

  digits = digits.substring(0, 11);

  if (digits.length <= 2) {
    return `(${digits}`;
  }
  if (digits.length <= 7) {
    return `(${digits.substring(0, 2)}) ${digits.substring(2)}`;
  }
  return `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7)}`;
};
