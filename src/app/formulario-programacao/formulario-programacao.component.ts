import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulario-programacao',
    imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  templateUrl: './formulario-programacao.component.html'
})


export class FormularioProgramacaoComponent {
    country: Food[] = [
    { value: 'steak-0', viewValue: 'SocialCont' },
    { value: 'pizza-1', viewValue: 'Innovatech' },
    { value: 'tacos-2', viewValue: 'Meireles e Freitas' },
    { value: 'tacos-3', viewValue: 'Fama' },
  ];

  selectedCountry = this.country[2].value;

  city: Food[] = [
    { value: 'steak-0', viewValue: 'Actyon COB' },
    { value: 'pizza-1', viewValue: 'Actyon Web' },
    { value: 'tacos-2', viewValue: 'API Actyon' },
    { value: 'tacos-3', viewValue: 'Portal Quite Rápido / Negociação' },
  ];

  selectedCity = this.city[1].value;

}
