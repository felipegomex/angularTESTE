import { Component, OnInit, OnDestroy } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonitoramentoImportacoesService, Importacao, Servidor } from './monitoramento-importacoes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monitoramento-importacoes',
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule],
  templateUrl: './monitoramento-importacoes.component.html',
  styleUrls: ['./monitoramento-importacoes.component.scss']
})
export class MonitoramentoImportacoesComponent implements OnInit, OnDestroy {
  
  // Dados das importações
  importacoes: Importacao[] = [];

  // Lista de servidores para o filtro
  servidores: Servidor[] = [];

  // Filtros
  filtroServidor = '';
  filtroEmpresa = '';
  filtroStatus = '';
  filtroDataInicio = '';
  filtroDataFim = '';

  // Dados filtrados
  importacoesFiltradas: Importacao[] = [];

  // Métricas do dashboard (apenas as necessárias)
  metricas = {
    totalImportacoes: 0,
    importacoesComSucesso: 0,
    importacoesComErro: 0,
    importacoesComWarning: 0
  };

  // Colunas da tabela
  displayedColumns: string[] = [
    'id', 'dataInicio', 'tempoExecucao', 'empresa', 'contratante',
    'nomeArquivo', 'qtdeRegistros', 'valorImportado', 'qtdePagamentos',
    'servidor', 'status', 'observacoes'
  ];

  // Timer para atualização automática
  private intervalId: any;
  private subscriptions: Subscription[] = [];

  // Estados de loading
  isLoading = false;
  isExporting = false;

  constructor(private monitoramentoService: MonitoramentoImportacoesService) { }

  ngOnInit(): void {
    this.carregarDadosIniciais();
    this.iniciarAtualizacaoAutomatica();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  carregarDadosIniciais(): void {
    this.isLoading = true;

    // Carregar servidores
    const servidoresSub = this.monitoramentoService.getServidores().subscribe({
      next: (servidores) => {
        this.servidores = servidores;
      },
      error: (error) => {
        console.error('Erro ao carregar servidores:', error);
        this.isLoading = false;
      }
    });

    // Carregar importações
    const importacoesSub = this.monitoramentoService.getImportacoes().subscribe({
      next: (importacoes) => {
        this.importacoes = importacoes;
        this.aplicarFiltros();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar importações:', error);
        this.isLoading = false;
      }
    });

    this.subscriptions.push(servidoresSub, importacoesSub);
  }

  iniciarAtualizacaoAutomatica(): void {
    // Atualização a cada 5 minutos (300000 ms)
    this.intervalId = setInterval(() => {
      if (this.monitoramentoService.isHorarioMonitoramentoAtivo()) {
        this.atualizarDados();
      }
    }, 300000); // 5 minutos
  }

  atualizarDados(): void {
    console.log('Atualizando dados das importações...');
    
    const updateSub = this.monitoramentoService.atualizarDados().subscribe({
      next: (importacoes) => {
        this.importacoes = importacoes;
        this.aplicarFiltros();
        console.log('Dados atualizados com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao atualizar dados:', error);
      }
    });

    this.subscriptions.push(updateSub);
  }

  aplicarFiltros(): void {
    this.importacoesFiltradas = this.importacoes.filter(importacao => {
      let passa = true;

      if (this.filtroServidor && importacao.servidor !== this.filtroServidor) {
        passa = false;
      }

      if (this.filtroEmpresa && !importacao.empresa.toLowerCase().includes(this.filtroEmpresa.toLowerCase())) {
        passa = false;
      }

      if (this.filtroStatus && importacao.status !== this.filtroStatus) {
        passa = false;
      }

      if (this.filtroDataInicio) {
        const dataFiltro = new Date(this.filtroDataInicio);
        if (importacao.dataInicio < dataFiltro) {
          passa = false;
        }
      }

      if (this.filtroDataFim) {
        const dataFiltro = new Date(this.filtroDataFim);
        if (importacao.dataInicio > dataFiltro) {
          passa = false;
        }
      }

      return passa;
    });

    this.calcularMetricas();
  }

  calcularMetricas(): void {
    const estatisticas = this.monitoramentoService.getEstatisticas(this.importacoesFiltradas);

    this.metricas.totalImportacoes = estatisticas.total;
    this.metricas.importacoesComSucesso = estatisticas.sucessos;
    this.metricas.importacoesComErro = estatisticas.erros;
    this.metricas.importacoesComWarning = estatisticas.warnings;
  }

  limparFiltros(): void {
    this.filtroServidor = '';
    this.filtroEmpresa = '';
    this.filtroStatus = '';
    this.filtroDataInicio = '';
    this.filtroDataFim = '';
    this.aplicarFiltros();
  }

  exportarRelatorio(): void {
    this.isExporting = true;
    
    const exportSub = this.monitoramentoService.exportarRelatorio(this.importacoesFiltradas).subscribe({
      next: (blob) => {
        // Criar link para download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `relatorio_importacoes_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.isExporting = false;
        console.log('Relatório exportado com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao exportar relatório:', error);
        this.isExporting = false;
      }
    });

    this.subscriptions.push(exportSub);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'sucesso': return 'primary';
      case 'erro': return 'warn';
      case 'warning': return 'accent';
      case 'processando': return 'primary';
      default: return 'primary';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'sucesso': return 'check_circle';
      case 'erro': return 'error';
      case 'warning': return 'warning';
      case 'processando': return 'hourglass_empty';
      default: return 'help';
    }
  }


  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getCurrentDateTime(): Date {
    return new Date();
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  formatarNumero(valor: number): string {
    return new Intl.NumberFormat('pt-BR').format(valor);
  }

  isHorarioAtivo(): boolean {
    return this.monitoramentoService.isHorarioMonitoramentoAtivo();
  }
}