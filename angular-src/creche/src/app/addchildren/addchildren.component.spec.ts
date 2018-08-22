import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchildrenComponent } from './addchildren.component';

describe('AddchildrenComponent', () => {
  let component: AddchildrenComponent;
  let fixture: ComponentFixture<AddchildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
