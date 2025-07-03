import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCapacitacaoComponent } from './cursos-capacitacao.component';

describe('CursosCapacitacaoComponent', () => {
  let component: CursosCapacitacaoComponent;
  let fixture: ComponentFixture<CursosCapacitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosCapacitacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCapacitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
