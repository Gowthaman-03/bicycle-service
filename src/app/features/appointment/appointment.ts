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

  isSubmitting = false;
  showNotification = false;
  private appointmentService = inject(Appointmentservice);
  today = new Date().toISOString().split('T')[0];

  appointmentForm = this.fb.group({
    name: ['', Validators.required],

    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],

    email: ['', [Validators.required, Validators.email]],

    address: [''],
  });

  bookAppointment(): void {
    console.log(this.appointmentForm.getRawValue());

    const data = this.appointmentForm.value;
    if (this.appointmentForm.valid) {
      this.appointmentService.bookAppointment(data).subscribe({
        next: (res: any) => {
          this.isSubmitting = false;
          this.showSuccessNotification();
          window.open(res.whatsAppUrl, '_blank');
        },
        error: () => {
          this.isSubmitting = false;
        },
      });
    }
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessNotification();
    }, 6000);
    if (this.appointmentForm.invalid) {
      this.appointmentForm.markAllAsTouched();

      return;
    }

    this.isSubmitting = true;

    /*
     * Call your AppointmentService here.
     *
     * this.appointmentService
     *   .createAppointment(requestBody)
     *   .subscribe({
     *     next: () => {
     *       this.isSubmitting = false;
     *     },
     *     error: () => {
     *       this.isSubmitting = false;
     *     }
     *   });
     */
  }
  showSuccessNotification(): void {
    console.log('fghjhgfghj');
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 6000);
  }

  closeNotification(): void {
    this.showNotification = false;
  }
}
