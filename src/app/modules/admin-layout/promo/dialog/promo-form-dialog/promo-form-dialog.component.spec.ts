import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoFormDialogComponent } from './promo-form-dialog.component';

describe('PromoFormDialogComponent', () => {
  let component: PromoFormDialogComponent;
  let fixture: ComponentFixture<PromoFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
