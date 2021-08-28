import { TestBed } from '@angular/core/testing';

import { BusyNotifactionService } from './busy-notifaction.service';

describe('BusyNotifactionService', () => {
  let service: BusyNotifactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusyNotifactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
