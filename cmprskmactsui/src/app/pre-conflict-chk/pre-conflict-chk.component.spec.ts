import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreConflictChkComponent } from './pre-conflict-chk.component';

describe('PreConflictChkComponent', () => {
  let component: PreConflictChkComponent;
  let fixture: ComponentFixture<PreConflictChkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreConflictChkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreConflictChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
