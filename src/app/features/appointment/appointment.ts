import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Appointmentservice } from './appointmentservice';
import { SERVICES_PROVIDED, ServiceItem, BicycleType } from '../../../service-center-data';

export { AppointmentComponent as Appointment };

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class AppointmentComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private appointmentService = inject(Appointmentservice);

  isSubmitting = false;
  showNotification = false;
  submittedSuccessfully = false;
  whatsAppUrl: string | null = null;

  today = new Date().toISOString().split('T')[0];
  services: ServiceItem[] = SERVICES_PROVIDED;

  bikeTypes: BicycleType[] = [
    'Road Bike',
    'Mountain Bike (MTB)',
    'Gravel / Adventure',
    'Hybrid / Commuter',
    'E-Bike / Electric',
    'Triathlon / TT',
    'BMX / Kids Bike',
  ];

  selectedServiceName: string | null = null;
  selectedServiceId: string | null = null;

  appointmentForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    bikeType: ['Mountain Bike (MTB)', Validators.required],
    bikeModel: ['', Validators.required],
    serviceId: ['', Validators.required],
    appointmentDate: [new Date().toISOString().split('T')[0], Validators.required],
    address: [''],
    notes: [''],
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['name']) {
        this.selectedServiceName = params['name'];
      }
      if (params['service']) {
        this.selectedServiceId = params['service'];
        this.appointmentForm.patchValue({ serviceId: params['service'] });
        const matched = this.services.find((s) => s.id === params['service']);
        if (matched) {
          this.selectedServiceName = matched.name;
        }
      }
    });

    if (!this.appointmentForm.get('serviceId')?.value && this.services.length > 0) {
      this.appointmentForm.patchValue({ serviceId: this.services[0].id });
      this.selectedServiceName = this.services[0].name;
    }

    this.appointmentForm.get('serviceId')?.valueChanges.subscribe((id) => {
      const match = this.services.find((s) => s.id === id);
      if (match) {
        this.selectedServiceName = match.name;
      }
    });
  }

  bookAppointment(): void {
    if (this.appointmentForm.invalid) {
      this.appointmentForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const data = this.appointmentForm.value;
    const serviceName = this.selectedServiceName || 'General Service';

    this.appointmentService.bookAppointment(data).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        this.submittedSuccessfully = true;
        this.whatsAppUrl = res?.whatsAppUrl || this.generateWhatsAppUrl(data, serviceName);
        this.showSuccessNotification();
        if (this.whatsAppUrl) {
          try {
            window.open(this.whatsAppUrl, '_blank');
          } catch {
            // Popup blocker fallback
          }
        }
      },
      error: () => {
        // Resilient fallback when backend API is offline
        this.isSubmitting = false;
        this.submittedSuccessfully = true;
        this.whatsAppUrl = this.generateWhatsAppUrl(data, serviceName);
        this.showSuccessNotification();
        if (this.whatsAppUrl) {
          try {
            window.open(this.whatsAppUrl, '_blank');
          } catch {
            // Popup blocker fallback
          }
        }
      },
    });
  }

  generateWhatsAppUrl(data: any, serviceName: string): string {
    const text = encodeURIComponent(
      `*FREEWHEEL FACTORY — SERVICE BOOKING INQUIRY*\n` +
      `------------------------------------------\n` +
      `• Rider Name: ${data.name || ''}\n` +
      `• Contact: ${data.phoneNumber || ''}\n` +
      `• Email: ${data.email || ''}\n` +
      `• Bicycle Type: ${data.bikeType || 'Not specified'}\n` +
      `• Brand / Model: ${data.bikeModel || 'Not specified'}\n` +
      `• Required Package: ${serviceName}\n` +
      `• Preferred Date: ${data.appointmentDate || 'Earliest available'}\n` +
      `• Location/Notes: ${data.address || data.notes || 'In-store drop off'}\n` +
      `------------------------------------------\n` +
      `Please confirm my workshop intake appointment.`
    );
    // Freewheel Factory Workshop WhatsApp Dispatch Line
    return `https://api.whatsapp.com/send?phone=919999999999&text=${text}`;
  }

  showSuccessNotification(): void {
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 10000);
  }

  closeNotification(): void {
    this.showNotification = false;
  }
}

