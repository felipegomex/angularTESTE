import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoManuaisComponent } from './documentacao-manuais.component';

describe('DocumentacaoManuaisComponent', () => {
  let component: DocumentacaoManuaisComponent;
  let fixture: ComponentFixture<DocumentacaoManuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacaoManuaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacaoManuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
