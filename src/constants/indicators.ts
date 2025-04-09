export const indicators = [
  { value: false, label: '--- Selecciona una opción ---' },
  { value: 'uf', label: 'Unidad de fomento (UF)' },
  { value: 'libra_cobre', label: 'Libra de Cobre' },
  { value: 'tasa_desempleo', label: 'Tasa de desempleo' },
  { value: 'euro', label: 'Euro' },
  { value: 'imacec', label: 'Imacec' },
  { value: 'dolar', label: 'Dólar observado' },
  { value: 'tpm', label: 'Tasa Política Monetaria (TPM)' },
  { value: 'ivp', label: 'Índice de valor promedio (IVP)' },
  { value: 'ipc', label: 'Índice de Precios al Consumidor (IPC)' },
  { value: 'dolar_intercambio', label: 'Dólar acuerdo' },
  { value: 'utm', label: 'Unidad Tributaria Mensual (UTM)' },
  { value: 'bitcoin', label: 'Bitcoin' },
  // ... Donde no hay endpoint, se inventa el JSON 🎭
];

export type indicators = {
  value: string;
  label: string;
};
