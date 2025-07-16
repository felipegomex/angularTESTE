import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoLayoutComponent } from './documentacao-layout.component';

describe('DocumentacaoLayoutComponent', () => {
  let component: DocumentacaoLayoutComponent;
  let fixture: ComponentFixture<DocumentacaoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacaoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacaoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
