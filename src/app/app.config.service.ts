import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface config {
  AuthUrl: string;
}
@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  appConfig = signal<config | undefined>(undefined);

  constructor(private http: HttpClient) {
    this.loadConfig();
  }

  async loadConfig() {
    try {
      const value = await lastValueFrom(this.http.get<config>('/config.json'));
      this.appConfig.set(value);
      return true;
    } catch (error: any) {
      console.error('Error loading config:', error);
      return false;
    }
  }

  get AuthUrl() {
    return this.appConfig()?.AuthUrl;
  }
}
