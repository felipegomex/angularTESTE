import { Component } from '@angular/core';
import { OperadorService } from '../operador.service'; // Importando os serviços da API
import { CriarOperador } from 'src/app/models/criarOperador'; // Importando o modelo com as propriedades
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component'; // Importando o modulo formulario pra poder chamar ele no HTML
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-operador',
  imports: [FormularioCadastroComponent,RouterModule],
  templateUrl: './cadastro-operador.component.html',
  styleUrl: './cadastro-operador.component.scss'
})
export class CadastroOperadorComponent {
  constructor(
    private operadorService: OperadorService,
    private router: Router // Injeção correta do Router
  ) {}  
  
  onFormSubmit(operador: CriarOperador) {}

  criarOperador(operador: CriarOperador): void {
  console.log('✅ Dados sendo enviados para API:', operador);
  
  this.operadorService.CadastrarOperadores(operador).subscribe({
    next: (response) => {
      console.log('✅ Sucesso:', response);
      alert('Cadastro realizado com sucesso!');
      this.router.navigate(['/social/equipe']); // Redireciona para lista de operadores
    },
    error: (error) => {
      console.error('❌ Erro completo:', error);
      console.log('🔴 Status:', error.status);
      console.log('🔴 Mensagem:', error.message);
      console.log('🔴 Response body:', error.error); 
      console.log('🔴 Error object:', JSON.stringify(error));
      
      if (error.error) {
        console.log('📋 Detalhes do erro:');
        if (typeof error.error === 'string') {
          console.log('Mensagem do servidor:', error.error);
        } else if (error.error.message) {
          console.log('Mensagem:', error.error.message);
        }
        if (error.error.stackTrace) {
          console.log('Stack trace:', error.error.stackTrace);
        }
      }
    }
  });
}


}
  
