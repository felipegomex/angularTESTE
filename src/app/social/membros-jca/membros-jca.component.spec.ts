import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosJcaComponent } from './membros-jca.component';

describe('MembrosJcaComponent', () => {
  let component: MembrosJcaComponent;
  let fixture: ComponentFixture<MembrosJcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosJcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembrosJcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
