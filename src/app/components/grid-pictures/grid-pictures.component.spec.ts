import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPicturesComponent } from './grid-pictures.component';

describe('GridPicturesComponent', () => {
  let component: GridPicturesComponent;
  let fixture: ComponentFixture<GridPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
