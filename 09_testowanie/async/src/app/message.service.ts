import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  showMessageAfterDelay(message: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(message), 1000);
    });
  }
}