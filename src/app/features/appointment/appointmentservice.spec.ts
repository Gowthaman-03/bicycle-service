import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Appointmentservice } from './appointmentservice';

describe('Appointmentservice', () => {
  let service: Appointmentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Appointmentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
