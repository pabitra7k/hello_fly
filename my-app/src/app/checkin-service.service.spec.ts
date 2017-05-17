import { TestBed, inject } from '@angular/core/testing';

import { CheckinServiceService } from './checkin-service.service';

describe('CheckinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckinServiceService]
    });
  });

  it('should be created', inject([CheckinServiceService], (service: CheckinServiceService) => {
    expect(service).toBeTruthy();
  }));
});
