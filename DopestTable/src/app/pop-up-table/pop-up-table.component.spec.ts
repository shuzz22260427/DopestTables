import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTableComponent } from './pop-up-table.component';

describe('PopUpTableComponent', () => {
  let component: PopUpTableComponent;
  let fixture: ComponentFixture<PopUpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
