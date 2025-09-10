import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { OperadorService } from 'src/app/social/equipe/operador.service'; // Importando os serviços da API
import { CriarOperador } from 'src/app/models/criarOperador'; // Importando o modelo com as propriedades
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


interface Opcoes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulario-cadastro',
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
      RouterModule,
    ],
  templateUrl: './formulario-cadastro.component.html',
  styleUrl: './formulario-cadastro.component.scss'
})
export class FormularioCadastroComponent implements OnInit {

operadorForm!:FormGroup;
@Output() onSubmitt = new EventEmitter<CriarOperador>();

  perfil: Opcoes[] = [
    { value: '', viewValue: '' },
    { value: 'S', viewValue: 'Suporte' },
    { value: 'D', viewValue: 'Diretoria' },
    { value: 'F', viewValue: 'Financeiro' },
    { value: 'P', viewValue: 'Programador' },
    { value: 'D', viewValue: '?' }];
  perfilSelecionado = this.perfil[0].value;
  
  admin: Opcoes[] = [
    { value: 'true', viewValue: 'Sim' },
    { value: 'false', viewValue: 'Não' }];
  adminSelecao = this.admin[1].value;

  ngOnInit(): void {
      this.operadorForm = new FormGroup({
            operador_Id: new FormControl(''),
            nome: new FormControl(''),
            senha: new FormControl(''),
            email: new FormControl(''),
            se_Admin: new FormControl(''),
            se_Ativo: new FormControl('S'),
            usuario_Inclusao: new FormControl('JCA'),
            usuario_Alteracao: new FormControl(''),
            perfil_Id: new FormControl(''),
      });
  }

  onSubmit() {
    if (this.operadorForm.valid) {
      const formValues = this.operadorForm.value;
        const dadosParaEnviar = {
      ...formValues,
      se_Admin: formValues.se_Admin === 'true' ? true : false
    };
      console.log('Dados convertidos para envio:', dadosParaEnviar);
      this.onSubmitt.emit(dadosParaEnviar);
    } else {
      Object.keys(this.operadorForm.controls).forEach(key => {
      this.operadorForm.get(key)?.markAsTouched();
    });
    } 
}


}
