import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosJcaComponent } from './produtos-jca.component';

describe('ProdutosJcaComponent', () => {
  let component: ProdutosJcaComponent;
  let fixture: ComponentFixture<ProdutosJcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosJcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosJcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
