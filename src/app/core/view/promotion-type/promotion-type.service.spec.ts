import { TestBed } from '@angular/core/testing';

import { PromotionTypeService } from './promotion-type.service';

describe('PromotionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotionTypeService = TestBed.get(PromotionTypeService);
    expect(service).toBeTruthy();
  });
});
