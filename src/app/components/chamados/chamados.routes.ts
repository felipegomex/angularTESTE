import { Routes } from '@angular/router';
import { CadastroChamadoComponent } from './cadastro-chamado/cadastro-chamado.component';
import { ChamadosComponent } from './chamados.component';
import { DetalhesChamadoComponent } from './detalhes-chamado/detalhes-chamado.component';

export const ChamadosRoutes: Routes = [
  {
    path: 'cadastro-chamado', 
    component: CadastroChamadoComponent,
    data: { title: 'Cadastrar Chamado' },
  },
  {
    path: 'detalhes-chamados/:id', 
    component: DetalhesChamadoComponent,
    data: { title: 'Detalhes Chamado' },
  },
  {
    path: 'chamados',
    component: ChamadosComponent, 
    data: { title: 'chamados' },
  },
];