import { TestBed } from '@angular/core/testing';

import { MortgageCalculationsService } from './mortgage-calculations.service';

describe('MortgageCalculationsService', () => {
  let service: MortgageCalculationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
