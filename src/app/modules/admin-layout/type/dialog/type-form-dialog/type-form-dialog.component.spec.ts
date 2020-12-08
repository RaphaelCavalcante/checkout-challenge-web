import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFormDialogComponent } from './type-form-dialog.component';

describe('TypeFormDialogComponent', () => {
  let component: TypeFormDialogComponent;
  let fixture: ComponentFixture<TypeFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
