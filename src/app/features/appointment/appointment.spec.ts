import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppointmentComponent } from './appointment';

describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.appointmentForm.get('name')?.value).toBe('');
    expect(component.appointmentForm.get('phoneNumber')?.value).toBe('');
    expect(component.appointmentForm.get('email')?.value).toBe('');
    expect(component.appointmentForm.valid).toBeFalse();
  });

  it('should validate 10-digit phone number', () => {
    const phoneControl = component.appointmentForm.get('phoneNumber');
    phoneControl?.setValue('12345');
    expect(phoneControl?.valid).toBeFalse();

    phoneControl?.setValue('9876543210');
    expect(phoneControl?.valid).toBeTrue();
  });
});
