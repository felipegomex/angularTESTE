import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importações do Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-acessos-clientes',
  standalone: true,
  imports: [
    CommonModule,
    // ✅ Importar TODOS os módulos do Material necessários
    MatCardModule,
    MatExpansionModule,
    MatTableModule
  ],
  templateUrl: './acessos-clientes.component.html',
  styleUrls: ['./acessos-clientes.component.scss']
})
export class AcessosClientesComponent {
  // Colunas da tabela
  colunasExibidas: string[] = ['servidor', 'carteiras', 'iis', 'versao', 'hml'];
  
  // Dados dos grupos
  grupos = [
    {
      grupo: 'Uniocobra',
      empresas: [
        {
          nome: 'Innovatech',
          localizacao: 'Ibiuna',
          servidores: [
            {
              ipServidor: '192.168.0.203',
              carteiras: ['Varejo e pequenas da Tivea'],
              iis: '192.168.0.204',
              versaoActyonweb: '192.168.0.204:3010',
              actyonwebHml: null
            },
            {
              ipServidor: '192.168.0.235',
              carteiras: ['Vuon, Pague Menos Leve Mais'],
              iis: '192.168.0.204',
              versaoActyonweb: '192.168.0.204:2020',
              actyonwebHml: '192.168.0.204:3030'
            }
          ]
        },
        {
          nome: 'Neurocob',
          localizacao: 'Ibiuna',
          servidores: [
            {
              ipServidor: '192.168.0.225',
              carteiras: ['Caedu'],
              iis: '192.168.0.205',
              versaoActyonweb: '192.168.0.205:5555',
              actyonwebHml: '192.168.0.225:5050'
            },
            {
              ipServidor: '192.168.0.235',
              carteiras: ['Avenida'],
              iis: '192.168.0.204',
              versaoActyonweb: '192.168.0.204:3020',
              actyonwebHml: null
            }
          ]
        },
        {
          nome: 'Cobtec',
          localizacao: 'São Paulo',
          servidores: [
            {
              ipServidor: '192.168.30.217',
              carteiras: ['Varejo/Tivea Variadas'],
              iis: '192.168.30.218',
              versaoActyonweb: '192.168.30.218:3010',
              actyonwebHml: ' - '
            }
          ]
        },
        {
          nome: 'Fort',
          localizacao: 'São Paulo',
          servidores: [
            {
              ipServidor: '192.168.15.198',
              carteiras: ['Caedu'],
              iis: '192.168.15.199',
              versaoActyonweb: '192.168.15.199:6565',
              actyonwebHml: null
            }
          ]
        }
      ]
    }
  ];
}