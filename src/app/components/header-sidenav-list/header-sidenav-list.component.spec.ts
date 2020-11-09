import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSidenavListComponent } from './header-sidenav-list.component';

describe('HeaderSidenavListComponent', () => {
  let component: HeaderSidenavListComponent;
  let fixture: ComponentFixture<HeaderSidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSidenavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
