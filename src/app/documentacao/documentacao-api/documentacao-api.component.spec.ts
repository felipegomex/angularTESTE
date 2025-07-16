import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoApiComponent } from './documentacao-api.component';

describe('DocumentacaoApiComponent', () => {
  let component: DocumentacaoApiComponent;
  let fixture: ComponentFixture<DocumentacaoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacaoApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacaoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
