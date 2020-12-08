import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoTypeListComponent } from './promo-type-list.component';

describe('PromoTypeListComponent', () => {
  let component: PromoTypeListComponent;
  let fixture: ComponentFixture<PromoTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
