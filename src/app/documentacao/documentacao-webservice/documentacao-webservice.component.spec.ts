import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoWebserviceComponent } from './documentacao-webservice.component';

describe('DocumentacaoWebserviceComponent', () => {
  let component: DocumentacaoWebserviceComponent;
  let fixture: ComponentFixture<DocumentacaoWebserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacaoWebserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacaoWebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
