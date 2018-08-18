import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrechesComponent } from './creches.component';

describe('CrechesComponent', () => {
  let component: CrechesComponent;
  let fixture: ComponentFixture<CrechesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrechesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
