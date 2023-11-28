import { TestBed } from '@angular/core/testing';

import { IdpCommonServiceService } from './idp-common-service.service';

describe('IdpCommonServiceService', () => {
  let service: IdpCommonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdpCommonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
