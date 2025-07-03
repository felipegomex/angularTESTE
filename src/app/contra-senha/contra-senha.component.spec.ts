import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraSenhaComponent } from './contra-senha.component';

describe('ContraSenhaComponent', () => {
  let component: ContraSenhaComponent;
  let fixture: ComponentFixture<ContraSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContraSenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
