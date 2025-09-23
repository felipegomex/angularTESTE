export interface Response<T>{
  sucesso: any;
  id: any;
  dados: T;
  mensagem: string;
  status: boolean;
}

export interface RespostaPaginada<T> {
  itens: T[];
  paginaAtual: number;
  totalPaginas: number;
  tamanhoPagina: number;
  totalItens: number;
  temPaginaAnterior: boolean;
  temProximaPagina: boolean;
}