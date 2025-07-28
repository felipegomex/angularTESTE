import { Routes } from '@angular/router';
import { MembrosJcaComponent } from './membros-jca/membros-jca.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { SetoresComponent } from './setores/setores.component';
import { EquipeComponent } from './equipe/equipe.component';

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
];