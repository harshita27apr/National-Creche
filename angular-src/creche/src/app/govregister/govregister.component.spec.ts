import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovregisterComponent } from './govregister.component';

describe('GovregisterComponent', () => {
  let component: GovregisterComponent;
  let fixture: ComponentFixture<GovregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
