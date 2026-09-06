import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppConfigService } from '../../app.config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  configService = inject(AppConfigService);

  getAuthHeader() {
    const token = sessionStorage.getItem('token');

    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return header;
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  login(data: any) {
    return this.http.post(this.configService.AuthUrl + 'api/auth/login', data);
  }
}
