import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaappComponent } from './telaapp.component';

describe('TelaappComponent', () => {
  let component: TelaappComponent;
  let fixture: ComponentFixture<TelaappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
