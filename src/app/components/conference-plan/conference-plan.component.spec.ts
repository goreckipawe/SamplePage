import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePlanComponent } from './conference-plan.component';

describe('ConferencePlanComponent', () => {
  let component: ConferencePlanComponent;
  let fixture: ComponentFixture<ConferencePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
