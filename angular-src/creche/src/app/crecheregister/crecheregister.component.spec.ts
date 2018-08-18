import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecheregisterComponent } from './crecheregister.component';

describe('CrecheregisterComponent', () => {
  let component: CrecheregisterComponent;
  let fixture: ComponentFixture<CrecheregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecheregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecheregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
