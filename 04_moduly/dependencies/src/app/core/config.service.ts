import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getConfig() {
    return { apiUrl: 'https://api.example.com' };
  }
}