import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddisplayComponent } from './griddisplay.component';

describe('GriddisplayComponent', () => {
  let component: GriddisplayComponent;
  let fixture: ComponentFixture<GriddisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriddisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
