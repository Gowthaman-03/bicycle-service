import { Columns } from '../../common/column';
import { Validators } from '@angular/forms';

export const appointmentColumn: Columns = {
  CycleId: {
    label: 'Cycle',
    field: 'CycleId',
    validators: [Validators.required],
  },
  ServiceType: {
    label: 'Service Type',
    field: 'ServiceType',
    validators: [Validators.required],
  },
  BookingDate: {
    label: 'Preferred Date',
    field: 'BookingDate',
    validators: [Validators.required],
  },
  BookingTime: {
    label: 'Preferred Time',
    field: 'BookingTime',
    validators: [Validators.required],
  },

  Notes: {
    label: 'Additional Notes',
    field: 'Notes',
    validators: [Validators.maxLength(500)],
  },
  useremail: {
    label: 'Email Address',
    field: 'useremail',
    validators: [Validators.required, Validators.email],
  },
  password: {
    label: 'Password',
    field: 'password',
    validators: [Validators.required, Validators.minLength(6)],
  },
};
