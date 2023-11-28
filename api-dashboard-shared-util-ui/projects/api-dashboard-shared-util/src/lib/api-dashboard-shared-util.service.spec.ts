import { TestBed } from '@angular/core/testing';

import { ApiDashboardSharedUtilService } from './api-dashboard-shared-util.service';

describe('ApiDashboardSharedUtilService', () => {
  let service: ApiDashboardSharedUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDashboardSharedUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
