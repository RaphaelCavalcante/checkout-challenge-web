import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSessionDialogComponent } from './start-session-dialog.component';

describe('StartSessionDialogComponent', () => {
  let component: StartSessionDialogComponent;
  let fixture: ComponentFixture<StartSessionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSessionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
