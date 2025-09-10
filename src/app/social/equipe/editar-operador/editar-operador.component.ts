import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperadorService } from '../operador.service';
import { BuscarOperadores } from 'src/app/models/Operador';
import { CriarOperador } from 'src/app/models/criarOperador';
import { Response } from 'src/app/models/Response';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

interface Opcoes {
  value: string;
  viewValue: string;
}
interface OpcoesAdmin {
  value: boolean;
  viewValue: string;
}
@Component({
  selector: 'app-editar-operador',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule, 
    MatInputModule,       
    MatButtonModule, 
    MatProgressSpinnerModule, 
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './editar-operador.component.html',
  styleUrls: ['./editar-operador.component.scss']
})
export class EditarOperadorComponent implements OnInit {
  operadorForm: FormGroup;
  operadorId: string = '';
  operador: BuscarOperadores | null = null;
  loading: boolean = true;
  errorMessage: string = '';
  serviceOperador: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private operadorService: OperadorService
  ) {
    this.operadorForm = this.fb.group({
      operador_ID: [''],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      perfil_Id: ['', Validators.required],
      senha: ['', Validators.required],
      se_Ativo: ['', Validators.required],
      se_Admin: ['', Validators.required],
      perfil_Skin: ['', Validators.required],
    });
  }
  perfil: Opcoes[] = [
    { value: 'S', viewValue: 'Suporte' },
    { value: 'A', viewValue: 'Diretoria' },
    { value: 'F', viewValue: 'Financeiro' },
    { value: 'P', viewValue: 'Programador' },
    { value: 'D', viewValue: '?' }];
  perfilSelecao = this.perfil[0].value;
  
  admin: OpcoesAdmin[] = [
    { value: true, viewValue: 'Sim' },
    { value: false, viewValue: 'Não'}];
  adminSelecao = this.admin[1].value;

  ativo: Opcoes[] = [
    { value: 'S', viewValue: 'Sim' },
    { value: 'N', viewValue: 'Não'}];
  ativoSelecao = this.ativo[1].value;

  ngOnInit(): void {
    this.operadorId = this.route.snapshot.paramMap.get('operador_ID') || '';
    
    if (!this.operadorId) {
      this.errorMessage = 'ID do operador não fornecido';
      this.loading = false;
      return;
    }

    this.carregarOperador();
  }

  carregarOperador(): void {
    this.operadorService.GetOperadorNome(this.operadorId).subscribe({
      next: (response: Response<BuscarOperadores[]>) => {
        if (response.dados && response.dados.length > 0) {
          this.operador = response.dados[0];
          this.preencherFormulario();
        } else {
          this.errorMessage = 'Operador não encontrado';
        }
        this.loading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Erro ao carregar operador';
        this.loading = false;
        console.error('Erro:', error);
      }
    });
  }

  preencherFormulario(): void {
    if (this.operador) {
      this.operadorForm.patchValue({
        operador_ID: this.operador.operador_ID,
        nome: this.operador.nome,
        email: this.operador.email,
        senha: this.operador.senha,
        perfil_Id: this.operador.perfil_Id,
        se_Ativo: this.operador.se_Ativo,
        se_Admin: this.operador.se_Admin,
        perfil_Skin: ''
      }
    );
    }
  }

  onSubmit(): void {
      const operadorData: BuscarOperadores = this.operadorForm.value;
      
      this.operadorService.EditarOperador(operadorData).subscribe({
        next: (response: Response<BuscarOperadores[]>) => {
          if (response.status) {
            alert('Operador atualizado com sucesso!');
            this.carregarOperador(); 
          } else {
            this.errorMessage = response.mensagem || 'Erro ao atualizar operador';
          }
        },
        error: (error: any) => {
          console.error('❌ Erro completo:', error);
          console.log('🔴 Status:', error.status);
          console.log('🔴 Mensagem:', error.message);
          console.log('🔴 Response body:', error.error); 
          console.log(operadorData);
        }
      });
    }

  cancelar(): void {
    this.router.navigate(['/social/equipe']);
  }

  deletarOperador() {
    const operadorId = this.operadorForm.get('operador_ID')?.value;
    
    if (operadorId && this.operadorService) {
      this.operadorService.DeletarOperadores(operadorId).subscribe({
        next: (response: any) => {
          if (response.status) {
            alert('Operador deletado com sucesso!');
            this.router.navigate(['/social/equipe']);
          }
        },
        error: (error: any) => {
          console.error('Erro ao deletar:', error);
        }
      });}}
}