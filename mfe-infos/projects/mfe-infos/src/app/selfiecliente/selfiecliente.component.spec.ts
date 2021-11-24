import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfieclienteComponent } from './selfiecliente.component';

describe('SelfieclienteComponent', () => {
  let component: SelfieclienteComponent;
  let fixture: ComponentFixture<SelfieclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfieclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfieclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
