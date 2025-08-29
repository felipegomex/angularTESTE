import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

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
<<<<<<< Updated upstream
=======
      {
        path: 'chamados', // Nova rota
        component: ChamadosComponent, // Componente da página de chamados
      },

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

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
        path: 'formulario-programacao', // Nova rota da página de formulário programação.
        component: FormularioProgramacaoComponent, // Componente da página de formulário programação.
      },

      {
        path: 'monitoramento-importacoes', // Nova rota da página de monitoramento de importações
        component: MonitoramentoImportacoesComponent, // Componente da página de monitoramento de importações
      },
>>>>>>> Stashed changes
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
];
