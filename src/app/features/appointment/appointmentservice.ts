import { inject, Injectable } from '@angular/core';
import { AppConfigService } from '../../app.config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Appointmentservice {
  private http = inject(HttpClient);
  configService = inject(AppConfigService);

  bookAppointment(data: any) {
    return this.http.post(this.configService.AuthUrl + '/api/demo-requests', data);
  }
}
