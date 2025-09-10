export interface Response<T>{
  sucesso: any;
  id: any;
  dados: T;
  mensagem: string;
  status: boolean
}