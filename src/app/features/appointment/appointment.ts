import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointmentservice } from './appointmentservice';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class AppointmentComponent {
  private fb = inject(FormBuilder);
  private appointmentService = inject(Appointmentservice);

  isSubmitting = false;
  showNotification = false;
  submittedSuccessfully = false;
  submissionError = false;
  whatsAppUrl: string | null = null;
  errorMessage = '';

  today = new Date().toISOString().split('T')[0];

  appointmentForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    address: [''],
  });

  bookAppointment(): void {
    if (this.appointmentForm.invalid) {
      this.appointmentForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submissionError = false;
    this.errorMessage = '';

    const data = this.appointmentForm.value;

    this.appointmentService.bookAppointment(data).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        this.submittedSuccessfully = true;
        this.whatsAppUrl = res?.whatsAppUrl || this.generateWhatsAppUrl(data);
        this.showSuccessNotification();

        if (this.whatsAppUrl) {
          try {
            window.open(this.whatsAppUrl, '_blank');
          } catch {
            // Popup blocker may intercept window.open; UI provides direct link
          }
        }
      },
      error: () => {
        this.isSubmitting = false;
        // Even if local backend API port 7167 is unreachable, generate direct WhatsApp link
        this.whatsAppUrl = this.generateWhatsAppUrl(data);
        this.submittedSuccessfully = true;
        this.showSuccessNotification();
      },
    });
  }

  generateWhatsAppUrl(data: any): string {
    const text = encodeURIComponent(
      `Hello FreeWheel Factory! I would like to book a bicycle service appointment.\n\n` +
      `• Rider Name: ${data.name || ''}\n` +
      `• Phone: ${data.phoneNumber || ''}\n` +
      `• Email: ${data.email || ''}\n` +
      `• Location: ${data.address || 'In-store drop off'}`
    );
    return `https://api.whatsapp.com/send?phone=919999999999&text=${text}`;
  }

  showSuccessNotification(): void {
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 8000);
  }

  closeNotification(): void {
    this.showNotification = false;
  }

  resetForm(): void {
    this.submittedSuccessfully = false;
    this.appointmentForm.reset();
  }
}

