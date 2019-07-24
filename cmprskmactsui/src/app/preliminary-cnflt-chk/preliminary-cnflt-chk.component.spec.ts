import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreliminaryCnfltChkComponent } from './preliminary-cnflt-chk.component';

describe('PreliminaryCnfltChkComponent', () => {
  let component: PreliminaryCnfltChkComponent;
  let fixture: ComponentFixture<PreliminaryCnfltChkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreliminaryCnfltChkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreliminaryCnfltChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
