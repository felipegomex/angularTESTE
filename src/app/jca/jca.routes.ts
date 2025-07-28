import { Routes } from '@angular/router';
import { ProdutosJcaComponent } from './produtos-jca/produtos-jca.component';
import { SobreJcaComponent } from './sobre-jca/sobre-jca.component';

export const JcaRoutes: Routes = [
  {
    path: 'produtos-jca', 
    component: ProdutosJcaComponent,
    data: { title: 'Produtos' },
  },
  {
    path: 'sobre-jca',
    component: SobreJcaComponent, 
    data: { title: 'SobreJCA' },
  },
];