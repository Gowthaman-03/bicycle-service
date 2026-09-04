import { Component, input } from '@angular/core';
import { ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { NoopValueAccessorDirective } from '../directives/noopValueAccessor.directive';
import { injectNgControl } from '../function/injectNgControl';
import { getErrorMessages } from '../function/validation';

@Component({
  selector: 'app-input-text',
  hostDirectives: [NoopValueAccessorDirective],
  imports: [ReactiveFormsModule, InputTextModule, InputNumberModule, KeyFilterModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputTextComponent {
  label = input.required<string>();
  type = input<'text' | 'int' | 'number' | 'money' | 'alpha' | 'alphanum'>('text');
  ngControl = injectNgControl();

  onBlur() {
    const formControl = this.ngControl.control;
    formControl.setValue(formControl.value.trim());
  }

  hasError() {
    const formControl = this.ngControl.control;

    return formControl && (formControl.touched || formControl.dirty) && formControl.invalid;
  }

  getErrors() {
    const formControl = this.ngControl.control;

    return formControl ? getErrorMessages(formControl.errors, this.label()) : [];
  }

  isRequired() {
    return this.ngControl.control?.hasValidator(Validators.required);
  }

  computdLabel() {
    if (this.label()) return this.label() + (this.isRequired() ? '*' : '');
    return this.label();
  }
}
