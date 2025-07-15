import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProgramacaoComponent } from './formulario-programacao.component';

describe('FormularioProgramacaoComponent', () => {
  let component: FormularioProgramacaoComponent;
  let fixture: ComponentFixture<FormularioProgramacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProgramacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
