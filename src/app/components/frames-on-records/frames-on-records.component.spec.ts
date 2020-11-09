import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramesOnRecordsComponent } from './frames-on-records.component';

describe('FramesOnRecordsComponent', () => {
  let component: FramesOnRecordsComponent;
  let fixture: ComponentFixture<FramesOnRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramesOnRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramesOnRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
