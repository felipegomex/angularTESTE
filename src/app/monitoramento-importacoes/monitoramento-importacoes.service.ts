import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Servidor {
  id: number;
  nome: string;
  ip: string;
  status: 'online' | 'offline' | 'warning';
}

export interface Empresa {
  id: number;
  nome: string;
}

export interface Contratante {
  id: number;
  nome: string;
  empresaId: number;
}

export interface Importacao {
  id: number;
  dataInicio: Date;
  dataFim: Date | null;
  tempoExecucao: string;
  empresa: string;
  contratante: string;
  nomeArquivo: string;
  qtdeRegistros: number;
  valorImportado: number;
  qtdePagamentos: number;
  observacoes: string;
  servidor: string;
  status: 'sucesso' | 'erro' | 'processando' | 'warning';
}

@Injectable({
  providedIn: 'root'
})
export class MonitoramentoImportacoesService {
  
  private importacoesSubject = new BehaviorSubject<Importacao[]>([]);
  public importacoes$ = this.importacoesSubject.asObservable();

  private servidores: Servidor[] = [
    { id: 1, nome: 'COBTEC', ip: '192.168.15.206', status: 'online' },
    { id: 2, nome: 'COBTEC CAEDU', ip: '192.168.15.198', status: 'online' },
    { id: 3, nome: 'INNOVATECH', ip: '192.168.0.203', status: 'warning' },
    { id: 4, nome: 'INNOVATECH 2', ip: '192.168.0.235', status: 'online' },
    { id: 5, nome: 'INNOVATECH CAEDU', ip: '192.168.0.225', status: 'offline' }
  ];

  private empresas: Empresa[] = [
    { id: 1, nome: 'JCA Soluções' },
    { id: 2, nome: 'Empresa B' },
    { id: 3, nome: 'Empresa C' },
    { id: 4, nome: 'Inovação Tech' },
    { id: 5, nome: 'Cobrança Eficiente' }
  ];

  private contratantes: Contratante[] = [
    { id: 1, nome: 'Cliente A', empresaId: 1 },
    { id: 2, nome: 'Cliente B', empresaId: 2 },
    { id: 3, nome: 'Cliente C', empresaId: 3 },
    { id: 4, nome: 'Cliente D', empresaId: 1 },
    { id: 5, nome: 'Cliente E', empresaId: 4 }
  ];

  private importacoesMock: Importacao[] = [
    {
      id: 1,
      dataInicio: new Date('2024-01-15 06:30:00'),
      dataFim: new Date('2024-01-15 06:45:00'),
      tempoExecucao: '15 min',
      empresa: 'JCA Soluções',
      contratante: 'Cliente A',
      nomeArquivo: 'importacao_20240115.csv',
      qtdeRegistros: 15420,
      valorImportado: 2500000.50,
      qtdePagamentos: 1250,
      observacoes: '',
      servidor: 'COBTEC',
      status: 'sucesso'
    },
    {
      id: 2,
      dataInicio: new Date('2024-01-15 07:00:00'),
      dataFim: null,
      tempoExecucao: '45 min',
      empresa: 'Empresa B',
      contratante: 'Cliente B',
      nomeArquivo: 'dados_cliente_b.xlsx',
      qtdeRegistros: 0,
      valorImportado: 0,
      qtdePagamentos: 0,
      observacoes: 'Erro: Arquivo corrompido - Falha na leitura dos dados',
      servidor: 'INNOVATECH',
      status: 'erro'
    },
    {
      id: 3,
      dataInicio: new Date('2024-01-15 08:15:00'),
      dataFim: new Date('2024-01-15 08:35:00'),
      tempoExecucao: '20 min',
      empresa: 'Empresa C',
      contratante: 'Cliente C',
      nomeArquivo: 'pagamentos_jan2024.csv',
      qtdeRegistros: 8750,
      valorImportado: 1800000.00,
      qtdePagamentos: 875,
      observacoes: 'Warning: Alguns registros com formato inconsistente',
      servidor: 'COBTEC CAEDU',
      status: 'warning'
    },
    {
      id: 4,
      dataInicio: new Date('2024-01-15 08:45:00'),
      dataFim: new Date('2024-01-15 09:00:00'),
      tempoExecucao: '15 min',
      empresa: 'Inovação Tech',
      contratante: 'Cliente D',
      nomeArquivo: 'cobranca_mensal.csv',
      qtdeRegistros: 12300,
      valorImportado: 3200000.75,
      qtdePagamentos: 1850,
      observacoes: '',
      servidor: 'INNOVATECH 2',
      status: 'sucesso'
    },
    {
      id: 5,
      dataInicio: new Date('2024-01-15 06:15:00'),
      dataFim: null,
      tempoExecucao: '60+ min',
      empresa: 'Cobrança Eficiente',
      contratante: 'Cliente E',
      nomeArquivo: 'importacao_grande.csv',
      qtdeRegistros: 0,
      valorImportado: 0,
      qtdePagamentos: 0,
      observacoes: 'Erro: Timeout na conexão com o banco de dados',
      servidor: 'INNOVATECH CAEDU',
      status: 'erro'
    }
  ];

  constructor() {
    this.importacoesSubject.next(this.importacoesMock);
  }

  // Simular busca de importações
  getImportacoes(): Observable<Importacao[]> {
    return of(this.importacoesMock).pipe(delay(500));
  }

  // Simular busca de servidores
  getServidores(): Observable<Servidor[]> {
    return of(this.servidores).pipe(delay(200));
  }

  // Simular busca de empresas
  getEmpresas(): Observable<Empresa[]> {
    return of(this.empresas).pipe(delay(200));
  }

  // Simular busca de contratantes
  getContratantes(): Observable<Contratante[]> {
    return of(this.contratantes).pipe(delay(200));
  }

  // Simular atualização de dados
  atualizarDados(): Observable<Importacao[]> {
    // Simular mudanças nos dados
    const novasImportacoes = [...this.importacoesMock];
    
    // Adicionar uma nova importação aleatória
    const novaImportacao: Importacao = {
      id: novasImportacoes.length + 1,
      dataInicio: new Date(),
      dataFim: Math.random() > 0.3 ? new Date() : null,
      tempoExecucao: Math.floor(Math.random() * 30 + 5) + ' min',
      empresa: this.empresas[Math.floor(Math.random() * this.empresas.length)].nome,
      contratante: this.contratantes[Math.floor(Math.random() * this.contratantes.length)].nome,
      nomeArquivo: `arquivo_${Date.now()}.csv`,
      qtdeRegistros: Math.floor(Math.random() * 20000),
      valorImportado: Math.random() * 5000000,
      qtdePagamentos: Math.floor(Math.random() * 2000),
      observacoes: Math.random() > 0.7 ? 'Processamento com sucesso' : '',
      servidor: this.servidores[Math.floor(Math.random() * this.servidores.length)].nome,
      status: Math.random() > 0.8 ? 'erro' : Math.random() > 0.9 ? 'warning' : 'sucesso'
    };

    novasImportacoes.unshift(novaImportacao);
    this.importacoesMock = novasImportacoes;
    this.importacoesSubject.next(novasImportacoes);

    return of(novasImportacoes).pipe(delay(1000));
  }

  // Simular exportação de relatório
  exportarRelatorio(importacoes: Importacao[]): Observable<Blob> {
    // Em um cenário real, isso geraria um arquivo Excel ou CSV
    const csvContent = this.gerarCSV(importacoes);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    return of(blob).pipe(delay(2000));
  }

  private gerarCSV(importacoes: Importacao[]): string {
    const headers = [
      'ID', 'Data Início', 'Data Fim', 'Tempo Execução', 'Empresa', 'Contratante',
      'Nome Arquivo', 'Qtde Registros', 'Valor Importado', 'Qtde Pagamentos',
      'Servidor', 'Status', 'Observações'
    ];

    const csvRows = [headers.join(',')];

    importacoes.forEach(imp => {
      const row = [
        imp.id,
        imp.dataInicio.toISOString(),
        imp.dataFim ? imp.dataFim.toISOString() : '',
        imp.tempoExecucao,
        `"${imp.empresa}"`,
        `"${imp.contratante}"`,
        `"${imp.nomeArquivo}"`,
        imp.qtdeRegistros,
        imp.valorImportado,
        imp.qtdePagamentos,
        `"${imp.servidor}"`,
        imp.status,
        `"${imp.observacoes}"`
      ];
      csvRows.push(row.join(','));
    });

    return csvRows.join('\n');
  }

  // Verificar se está no horário de monitoramento ativo (6h às 9h)
  isHorarioMonitoramentoAtivo(): boolean {
    const agora = new Date();
    const hora = agora.getHours();
    return hora >= 6 && hora <= 9;
  }

  // Obter estatísticas resumidas
  getEstatisticas(importacoes: Importacao[]) {
    return {
      total: importacoes.length,
      sucessos: importacoes.filter(i => i.status === 'sucesso').length,
      erros: importacoes.filter(i => i.status === 'erro').length,
      warnings: importacoes.filter(i => i.status === 'warning').length,
      processando: importacoes.filter(i => i.status === 'processando').length,
      totalRegistros: importacoes.reduce((sum, i) => sum + i.qtdeRegistros, 0),
      valorTotal: importacoes.reduce((sum, i) => sum + i.valorImportado, 0),
      totalPagamentos: importacoes.reduce((sum, i) => sum + i.qtdePagamentos, 0)
    };
  }
}