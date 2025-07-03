import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from 'src/app/material.module'; // Ajuste o caminho conforme necessário
import { ClientesService } from './clientes.service';



// Tabela de Acessos de Clientes

@Component({
  selector: 'app-acessos-clientes',
  templateUrl: './acessos-clientes.component.html',
  imports: [MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatCheckboxModule,
      MatIconModule,
      MatTableModule,
      MatMenuModule,
      MatButtonModule  ],
  styleUrls: ['./acessos-clientes.component.scss']
})

export class AcessosClientesComponent implements OnInit {
  displayedColumns: string[] = ['empresa', 'licencas', 'status', 'acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clientesService.getClientes().subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
      }
    );
  }
}