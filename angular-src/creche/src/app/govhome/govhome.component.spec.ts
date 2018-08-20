import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovhomeComponent } from './govhome.component';

describe('GovhomeComponent', () => {
  let component: GovhomeComponent;
  let fixture: ComponentFixture<GovhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
