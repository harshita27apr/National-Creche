import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcrecheComponent } from './addcreche.component';

describe('AddcrecheComponent', () => {
  let component: AddcrecheComponent;
  let fixture: ComponentFixture<AddcrecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcrecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcrecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
