import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { CriarChamado } from 'src/app/models/Chamados/criarChamado'; // Importando o modelo com as propriedades

interface Opcoes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-chamado',
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
    MatIconModule],  
  templateUrl: './cadastro-chamado.component.html',
  styleUrl: './cadastro-chamado.component.scss'
})
export class CadastroChamadoComponent implements OnInit{
chamadoForm!:FormGroup;
@Output() onSubmitt = new EventEmitter<CriarChamado>();

  produto: Opcoes[] = [
    { value: '', viewValue: '' },
    { value: '1', viewValue: 'Actyon Cob' },
    { value: '2', viewValue: 'Portal de Negociacao Quite Rapido' },
    { value: '3', viewValue: 'Actyon Web' },
    { value: '4', viewValue: 'Servidor/Hospedagem' },
    { value: '5', viewValue: 'WhatsActyon' },
    { value: '6', viewValue: 'API' },
    { value: '7', viewValue: 'Integração' },
    { value: '8', viewValue: 'Comissão Parceira' },
    { value: '10', viewValue: 'Encargos por Atraso' }];

  produtoSelecionado = this.produto[0].value;

  setor: Opcoes[] = [
    { value: '', viewValue: '' },
    { value: 'S', viewValue: 'Suporte' },
    { value: 'D', viewValue: 'Diretoria' },
    { value: 'F', viewValue: 'Financeiro' },
    { value: 'P', viewValue: 'Programador' },
    { value: 'D', viewValue: '?' }];

  setorSelecionado = this.setor[0].value;

  ngOnInit(): void {
      this.chamadoForm = new FormGroup({
            cliente_Id: new FormControl(''),
            contrato_Id: new FormControl(''),
            usuario_Inclusao: new FormControl('JCA'),
            tipo: new FormControl(''),
            titulo: new FormControl('')
      });
  }

  onSubmit() {
    if (this.chamadoForm.valid) {
      const formValues = this.chamadoForm.value;
        const dadosParaEnviar = {
      ...formValues
    };
      console.log('Dados convertidos para envio:', dadosParaEnviar);
      this.onSubmitt.emit(dadosParaEnviar);
    } else {
      Object.keys(this.chamadoForm.controls).forEach(key => {
      this.chamadoForm.get(key)?.markAsTouched();
    });
    } 
}


}
