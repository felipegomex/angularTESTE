import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from 'src/app/material.module';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Router, RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Chamados } from 'src/app/models/Chamados/Chamados';
import { ChamadoService } from './chamados.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker'; // ← CORRIGIDO
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-chamados',
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MaterialModule,
    MatSortModule,
    RouterModule,
    MatPaginatorModule,
    MatDatepickerModule, // ← CORRIGIDO
  ],
  templateUrl: './chamados.component.html',
  styleUrl: './chamados.component.scss',
  providers: [provideNativeDateAdapter()], 
})
export class ChamadosComponent implements OnInit, AfterViewInit {
displayedColumns: string[] = [
    'chamado_Id',
    'cliente_Id',
    'data_Inclusao', 
    'data_Fechamento',
    'usuario_Inclusao',
    'titulo',
    'tipo',
    'status',
    'funcionario_Id'
  ];

  dataSource = new MatTableDataSource<Chamados>();
  filtroStatus = 'A';
  filtroSetor = '';
  chamadosFiltrados: Chamados[] = [];
  chamadosGeral: Chamados[] = []; 
  chamadoSelecionado: any = null;
  filtroDataAberturaInicio: Date | null = null;
  filtroDataAberturaFim: Date | null = null;
  filtroDataFechamentoInicio: Date | null = null;
  filtroDataFechamentoFim: Date | null = null;


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private serviceChamado: ChamadoService,
    private dialog: MatDialog,
    private router: Router, 
    private cdRef: ChangeDetectorRef 
  ) {}
  
  ngOnInit(): void {
    this.carregarChamados();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.configurarDataSource();
        this.aplicarFiltros();

    });
  }

  configurarDataSource(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
      
      const initialSort: Sort = { 
        active: 'chamado_Id', 
        direction: 'desc' 
      };

      this.sort.active = initialSort.active;
      this.sort.direction = initialSort.direction;
      this.sort.sortChange.emit(initialSort);
    }

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    // Força a detecção de mudanças
    this.cdRef.detectChanges();
  }

  selecionarChamado(chamado: any): void {
    this.chamadoSelecionado = chamado;
  }
  
  onMouseOver(event: MouseEvent): void {
    const row = event.currentTarget as HTMLElement;
    row.style.backgroundColor = '#f5f5f5';
    
    // Aplica nas células
    const cells = row.getElementsByClassName('mat-cell');
    for (let i = 0; i < cells.length; i++) {
      (cells[i] as HTMLElement).style.backgroundColor = '#f5f5f5';
    }
  }

  onMouseOut(event: MouseEvent): void {
    const row = event.currentTarget as HTMLElement;
    
    // Verifica se a linha não está selecionada
    const rowIndex = Array.from(row.parentElement?.children || []).indexOf(row);
    const rowData = this.dataSource.data[rowIndex];
    
    if (!this.isSelected(rowData)) {
      row.style.backgroundColor = '';
      
      // Remove das células
      const cells = row.getElementsByClassName('mat-cell');
      for (let i = 0; i < cells.length; i++) {
        (cells[i] as HTMLElement).style.backgroundColor = '';
      }
    }
  }

  isSelected(chamado: any): boolean {
    return this.chamadoSelecionado && this.chamadoSelecionado.chamado_Id === chamado.chamado_Id;
  }

  carregarChamados(): void {
    this.serviceChamado.GetChamados().subscribe(response => {
      this.chamadosGeral = response.dados;
      this.dataSource.data = response.dados;
      
      // Reconfigura o dataSource após carregar os dados
      setTimeout(() => {
        this.configurarDataSource();
      });
    });
  }

  getStatus(status: string): string {
    return status === 'A' ? 'Aberto' : 'Fechado';
  }

  getFuncionario(funcionario_Id: number): string {
    return 'Ok';
  }

  getCargoEquipe(perfil_Id: string | null): string {
    if (perfil_Id === null || perfil_Id === undefined) {
      return '?';
    }
    
    switch (perfil_Id) {
      case 'S': return 'Suporte';
      case 'A': return 'Atendimento';
      case 'D': return 'Desenvolvimento';
      case 'F': return 'Financeiro';
      default: return '?';
    }
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    aplicarFiltros(): void {
    this.chamadosFiltrados = this.chamadosGeral.filter(chamado => {
      // Filtro por Data de Inclusão
      if (this.filtroDataAberturaInicio || this.filtroDataAberturaFim) {
        const dataInclusao = new Date(chamado.data_Inclusao);
        
        if (this.filtroDataAberturaInicio) {
          const dataInicio = new Date(this.filtroDataAberturaInicio);
          dataInicio.setHours(0, 0, 0, 0);
          if (dataInclusao < dataInicio) return false;
        }
        
        if (this.filtroDataAberturaFim) {
          const dataFim = new Date(this.filtroDataAberturaFim);
          dataFim.setHours(23, 59, 59, 999);
          if (dataInclusao > dataFim) return false;
        }
      }

      // Filtro por Data de Fechamento ← CORRIGIDO
      if (this.filtroDataFechamentoInicio || this.filtroDataFechamentoFim) {
        // Verifica se o chamado tem data de fechamento
        if (!chamado.data_Fechamento) return false;
        
        const dataFechamento = new Date(chamado.data_Fechamento);
        
        if (this.filtroDataFechamentoInicio) {
          const dataInicio = new Date(this.filtroDataFechamentoInicio);
          dataInicio.setHours(0, 0, 0, 0);
          if (dataFechamento < dataInicio) return false;
        }

        if (this.filtroDataFechamentoFim) {
          const dataFim = new Date(this.filtroDataFechamentoFim);
          dataFim.setHours(23, 59, 59, 999);
          if (dataFechamento > dataFim) return false;
        }
      }

      // ... (resto dos filtros)
      return true;
    });

    this.atualizarTabela();
  }

  limparFiltros(): void {
    this.filtroSetor = '';
    this.filtroStatus = 'A';
    this.filtroDataAberturaInicio = null;
    this.filtroDataAberturaFim = null;
    this.filtroDataFechamentoInicio = null;
    this.filtroDataFechamentoFim = null;
    this.dataSource.data = this.chamadosGeral;
    this.chamadosFiltrados = this.chamadosGeral;
    
    setTimeout(() => {
      this.aplicarFiltros();
      this.configurarDataSource();
    });
  }

  private atualizarTabela(): void {
    this.dataSource.data = this.chamadosFiltrados;
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
        this.cdRef.detectChanges();
  }

    recarregarDados(): void {
      this.carregarChamados();
  }


}