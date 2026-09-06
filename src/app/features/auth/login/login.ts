import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { markAllControlsAsDirty } from '../../../common/function/validation';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { loginColumn } from './login.column';
import { AuthService } from '../auth.service';
import { Navbar } from '../../../shared/navbar/navbar';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    Navbar,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  private returnUrl = '/';
  loginService = inject(AuthService);
  formControlArray = signal(
    Object.values(loginColumn).map((column) => [
      column.field,
      new FormControl(column.defaultvalue, {
        validators: column.validators,
      }),
    ]),
  );
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  }
  formControls = computed(() => Object.fromEntries(this.formControlArray()));
  loginForm = new FormGroup(this.formControls());
  submitLogin(): void {
    if (this.loginForm.valid) {
      const data = {
        login: this.loginForm.get('useremail')?.value,
        Password: this.loginForm.get('password')?.value,
      };
      this.loginService.login(data).subscribe({
        next: (res: any) => {
          console.log('Login Response:', res);
          sessionStorage.setItem('token', res.token);
          this.loginForm.reset();
          this.router.navigate([this.returnUrl ? this.returnUrl : '/appointment']);
        },
      });
    } else if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      markAllControlsAsDirty(Object.values(this.loginForm.controls));
      return;
    }

    console.log('Login Data:', this.loginForm.value);

    // API call will come here
  }

  get email() {
    return this.loginForm.get('useremail');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
