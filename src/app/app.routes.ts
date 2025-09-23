import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component'; // Componentes básicos ja importados pelo template
import { CursosCapacitacaoComponent } from './cursos-capacitacao/cursos-capacitacao.component'; // Importando componente Cursos-Capacitacao
import { AcessosClientesComponent } from './acessos-clientes/acessos-clientes.component'; // Importando componente Acessos-Clientes
import { ContraSenhaComponent } from './contra-senha/contra-senha.component'; // Importando componente Contra-Senha
import { ChamadosComponent } from './components/chamados/chamados.component'; // Importando componente Chamados
import { MonitoramentoImportacoesComponent } from './monitoramento-importacoes/monitoramento-importacoes.component'; // Importando componente Monitoramento-Importacoes


export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
       {
        path: 'chamados', // Nova rota
        component: ChamadosComponent, // Componente da página de chamados
      },

      {
        path: 'chamados', // Nova rota
        component: ChamadosComponent, // Componente da página de chamados
      },

      {
        path: 'chamados', // Nova rota
        component: ChamadosComponent, // Componente da página de chamados
      },

      {
        path: 'chamados', // Nova rota
        component: ChamadosComponent, // Componente da página de chamados
      },

      {
        path: 'chamados', // Nova rota
        component: ChamadosComponent, // Componente da página de chamados
      },

      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },

      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },

      {
        path: 'documentacao',
        loadChildren: () =>
          import('./documentacao/documentacao.routes').then((m) => m.DocumentacaoRoutes),
      },

      {
        path: 'social',
        loadChildren: () =>
          import('./social/social.routes').then((m) => m.SocialRoutes),
      },
      {
        path: 'chamados',
        loadChildren: () =>
          import('./components/chamados/chamados.routes').then((m) => m.ChamadosRoutes),
      },
      {
        path: 'jca',
        loadChildren: () =>
          import('./jca/jca.routes').then((m) => m.JcaRoutes),
      },

      {
        path: 'cursos-capacitacao', // Nova rota
        component: CursosCapacitacaoComponent, // Componente da página de cursos
      },

      {
        path: 'acessos-clientes', // Nova rota da página de acessos dos clientes
        component: AcessosClientesComponent, // Componente da página de acessos dos clientes
      },

      {
        path: 'contra-senha', // Nova rota da página de contra senha.
        component: ContraSenhaComponent, // Componente da página de contra senha.
      },

      {
        path: 'monitoramento-importacoes', // Nova rota da página de monitoramento de importações
        component: MonitoramentoImportacoesComponent, // Componente da página de monitoramento de importações
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
]