import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosclienteComponent } from './planoscliente.component';

describe('PlanosclienteComponent', () => {
  let component: PlanosclienteComponent;
  let fixture: ComponentFixture<PlanosclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
