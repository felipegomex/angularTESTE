import { Routes } from '@angular/router';
import { MembrosJcaComponent } from './membros-jca/membros-jca.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { SetoresComponent } from './setores/setores.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CadastroOperadorComponent } from './equipe/cadastro-operador/cadastro-operador.component';
import { EditarOperadorComponent } from './equipe/editar-operador/editar-operador.component';
import { DetalhesOperadorComponent } from './equipe/detalhes-operador/detalhes-operador.component';
import { DetalhesOperadorModalComponent } from './equipe/detalhes-operador/detalhes-operador-modal/detalhes-operador-modal.component';

export const SocialRoutes: Routes = [
  {
    path: 'membros-jca', 
    component: MembrosJcaComponent,
    data: { title: 'Membros' },
  },
  {
    path: 'meu-perfil',
    component: MeuPerfilComponent, 
    data: { title: 'Meu Perfil' },
  },
  {
    path: 'setores',
    component: SetoresComponent, 
    data: { title: 'Setores' },
  },
  {
    path: 'equipe',
    component: EquipeComponent, 
    data: { title: 'Equipe' },
  },
  {
    path: 'equipe/cadastro-operador', 
    component: CadastroOperadorComponent, 
  },
  {
    path: 'equipe/editar-operador', 
    component: EditarOperadorComponent, 
  },
{
  path: 'equipe/editar-operador/:operador_ID', // ← Adicione o parâmetro :id
  component: EditarOperadorComponent, // ← Use um componente dedicado, não o modal
},
];