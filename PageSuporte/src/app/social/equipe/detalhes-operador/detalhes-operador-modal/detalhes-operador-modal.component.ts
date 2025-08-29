import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface OperadorData {
  operador_ID: string;
  nome: string;
  senha: string;
  email: string;
  se_Admin: boolean;
  se_Ativo: string;
  data_Ultimo_Acesso: string;
  data_Inclusao: string;
  usuario_Inclusao: string;
  data_Alteracao: string;
  usuario_Alteracao: string;
  perfil_Id: string;
}

@Component({
  selector: 'app-detalhes-operador-modal',
  imports: [
  CommonModule,
    MatDialogModule,
    MatButtonModule   
  ],
  templateUrl: './detalhes-operador-modal.component.html',
  styleUrls: ['./detalhes-operador-modal.component.scss']
})
export class DetalhesOperadorModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: OperadorData) {}

}
