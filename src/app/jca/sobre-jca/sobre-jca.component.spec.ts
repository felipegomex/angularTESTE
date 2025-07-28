import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreJcaComponent } from './sobre-jca.component';

describe('SobreJcaComponent', () => {
  let component: SobreJcaComponent;
  let fixture: ComponentFixture<SobreJcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreJcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreJcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
