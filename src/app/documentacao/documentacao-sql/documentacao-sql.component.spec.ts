import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoSqlComponent } from './documentacao-sql.component';

describe('DocumentacaoSqlComponent', () => {
  let component: DocumentacaoSqlComponent;
  let fixture: ComponentFixture<DocumentacaoSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacaoSqlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacaoSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
