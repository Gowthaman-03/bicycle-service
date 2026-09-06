import { TestBed } from '@angular/core/testing';

import { Appointmentservice } from './appointmentservice';

describe('Appointmentservice', () => {
  let service: Appointmentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Appointmentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
