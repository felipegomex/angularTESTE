import { Routes } from '@angular/router';
import { DocumentacaoLayoutComponent } from './documentacao-layout/documentacao-layout.component';
import { DocumentacaoWebserviceComponent } from './documentacao-webservice/documentacao-webservice.component';
import { DocumentacaoApiComponent } from './documentacao-api/documentacao-api.component';
import { DocumentacaoSqlComponent } from './documentacao-sql/documentacao-sql.component';
import { DocumentacaoManuaisComponent } from './documentacao-manuais/documentacao-manuais.component';

export const DocumentacaoRoutes: Routes = [
  {
    path: '', 
    component: DocumentacaoLayoutComponent,
    data: { title: 'Documentação' },
  },
  {
    path: 'documentacao-layout',
    component: DocumentacaoLayoutComponent, 
    data: { title: 'Layouts' },
  },
    {
    path: 'documentacao-api',
    component: DocumentacaoApiComponent, 
    data: { title: 'Apis' },
  },
    {
    path: 'documentacao-webservice',
    component: DocumentacaoWebserviceComponent, 
    data: { title: 'Webservice' },
  },
    {
    path: 'documentacao-sql',
    component: DocumentacaoSqlComponent, 
    data: { title: 'SQL' },
  },
    {
    path: 'documentacao-manuais', 
    component: DocumentacaoManuaisComponent, 
    data: { title: 'Manuais' },
  },
];