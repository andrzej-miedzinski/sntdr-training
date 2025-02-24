import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRepository } from '../domain/user.repository';

@Injectable({
  providedIn: 'root'
})
export class UserHttpRepository implements UserRepository {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  async getUsers(): Promise<any[] | undefined> {
    return this.http.get<any[]>(this.apiUrl).toPromise();
  }

  async addUser(user: { name: string; email: string }) {
    return this.http.post(this.apiUrl, user).toPromise();
  }
}