// user.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return of([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ]);
  }
}