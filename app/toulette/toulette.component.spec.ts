import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouletteComponent } from './toulette.component';

describe('TouletteComponent', () => {
  let component: TouletteComponent;
  let fixture: ComponentFixture<TouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
