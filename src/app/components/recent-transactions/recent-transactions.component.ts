import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';


interface stats {
    id: number;
    time: string;
    color: string;
    title?: string;
    subtext?: string;
    link?: string;
}

@Component({
    selector: 'app-recent-transactions',
    imports: [NgApexchartsModule, MaterialModule],
    templateUrl: './recent-transactions.component.html',
})
export class AppRecentTransactionsComponent {
    stats: stats[] = [
        {
            id: 1,
            time: '09.30 am',
            color: 'primary',
            title: 'FAMA Solicitou contra-senha.',
        },
        {
            id: 2,
            time: '10.30 am',
            color: 'accent',
            title: 'Novo cadastro bussiness',
        },
        {
            id: 3,
            time: '12.30 pm',
            color: 'success',
            title: 'Novo chamado aberto por: LCD',
        },
        {
            id: 4,
            time: '12.30 pm',
            color: 'warning',
            title: 'Novo chamado aberto por: VALENÇA',
        },
        {
            id: 5,
            time: '12.30 pm',
            color: 'error',
            title: 'Quantidade de licenças atualizada Meireles e freitas. 300 Licenças.',
        },
        {
            id: 6,
            time: '12.30 pm',
            color: 'success',
            title: 'Página Criada',
        },
    ];
}
