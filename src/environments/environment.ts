export const environment = {
  baseUrl: "https://localhost:7217/api/"
};

// Função para construir URLs dinâmicas
export const getApiUrl = (endpoint: string): string => {
  return `${environment.baseUrl}${endpoint}`;
};

// Uso:
const operadorUrl = getApiUrl('Operador');
const chamadoUrl = getApiUrl('Chamado');