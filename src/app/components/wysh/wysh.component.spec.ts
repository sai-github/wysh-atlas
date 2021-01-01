import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { WyshComponent } from './wysh.component';

describe('WyshComponent', () => {
  let component: WyshComponent;
  let fixture: ComponentFixture<WyshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WyshComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
