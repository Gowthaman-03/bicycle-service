import { Columns } from '../../../common/column';
import { Validators } from '@angular/forms';

export const loginColumn: Columns = {
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
