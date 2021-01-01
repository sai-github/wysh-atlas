import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { GlowSpinnerComponent } from './glow-spinner.component';

describe('GlowSpinnerComponent', () => {
  let component: GlowSpinnerComponent;
  let fixture: ComponentFixture<GlowSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlowSpinnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
