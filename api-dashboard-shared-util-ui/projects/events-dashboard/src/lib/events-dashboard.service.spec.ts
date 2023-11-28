import { TestBed } from '@angular/core/testing';

import { EventsDashboardService } from './events-dashboard.service';

describe('EventsDashboardService', () => {
  let service: EventsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
