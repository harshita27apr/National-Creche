import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrechehomeComponent } from './crechehome.component';

describe('CrechehomeComponent', () => {
  let component: CrechehomeComponent;
  let fixture: ComponentFixture<CrechehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrechehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrechehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
