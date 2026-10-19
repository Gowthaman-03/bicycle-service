import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { Appointmentservice } from './appointmentservice';

describe('Appointmentservice', () => {
  let service: Appointmentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(Appointmentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
