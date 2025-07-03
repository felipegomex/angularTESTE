import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-cursos-capacitacao',
  standalone: true, // Se estiver usando Angular 17+ com standalone components
  imports: [MaterialModule], // Adicione o MaterialModule aqui
  templateUrl: './cursos-capacitacao.component.html',
})
export class CursosCapacitacaoComponent { 
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

}