import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from 'src/app/material.module';
import { OperadorService } from './operador.service';
import { BuscarOperadores } from 'src/app/models/Operador';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesOperadorModalComponent } from './detalhes-operador/detalhes-operador-modal/detalhes-operador-modal.component';

@Component({
  selector: 'app-equipe',
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
    MaterialModule,
    MatPaginatorModule
  ],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent implements OnInit {
  
  displayedColumns: string[] = [
    'operador_ID', 
    'nome', 
    'email', 
    'se_Ativo', 
    'perfil_Id', 
    'data_Ultimo_Acesso',
    'acoes'
  ];

  filtroStatus = '';
  filtroSetor = '';
  operadoresFiltrados: BuscarOperadores[] = [];
  operadoresGeral: BuscarOperadores[] = []; 
  // DataSource para a tabela
  dataSource = new MatTableDataSource<BuscarOperadores>();

  // Referências para ordenação e paginação
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private serviceOperador: OperadorService , private dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarOperadores();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  carregarOperadores(): void {
    this.serviceOperador.GetOperadores().subscribe(response => {
      this.operadoresGeral = response.dados;
      this.dataSource.data = response.dados;
    });
  }

  deletarOperadores(operador_id:string){
    this.serviceOperador.DeletarOperadores(operador_id).subscribe(response=>{
      console.log(response)
    })
  }

  formatarStatus(status: string): string {
    return status === 'S' ? 'Ativo' : 'Inativo';
  }

  editarOperador(operador: BuscarOperadores): void {
    console.log('Editar operador:', operador);
    // Implemente a lógica de edição aqui
  }

  verDetalhes(operador: any): void {
  this.dialog.open(DetalhesOperadorModalComponent, {
    width: '500px',
    data: operador
  });
}

  getCargoEquipe(perfil_Id: string): string {
    switch (perfil_Id) {
      case 'S': return 'Suporte';
      case 'A': return 'Diretoria';
      case 'P': return 'Programador';
      case 'F': return 'Financeiro';
      default: return '?';
    }
  }

// Método para filtrar os dados nome
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  aplicarFiltros(): void {
    this.operadoresFiltrados = this.operadoresGeral.filter(operador => {
      // Filtro por setor (precisa mapear perfil_Id para setores)
      if (this.filtroSetor && operador.perfil_Id !== this.filtroSetor) {
        return false;
      }
      // Filtro por status
      if (this.filtroStatus && operador.se_Ativo !== this.filtroStatus) {
        return false;
      }
      return true;
    });    this.dataSource.data = this.operadoresFiltrados;
  }

  limparFiltros(): void {
    this.filtroSetor = '';
    this.filtroStatus = '';    
    this.dataSource.data = this.operadoresGeral;
    this.operadoresFiltrados = this.operadoresGeral;
  }

}
