import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTableComponent } from './principal-table.component';

describe('PrincipalTableComponent', () => {
  let component: PrincipalTableComponent;
  let fixture: ComponentFixture<PrincipalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
