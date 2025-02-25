import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/users').pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        throw error;
      })
    );
  }

  addUser(user: any) {
    return this.http.post('/api/users', user).pipe(
      catchError(error => {
        console.error('Error adding user:', error);
        throw error;
      })
    );
  }
}