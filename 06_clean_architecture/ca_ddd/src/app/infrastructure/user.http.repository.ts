import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserRepository } from '../domain/user.repository';

@Injectable({
  providedIn: 'root'
})
export class UserHttpRepository implements UserRepository {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.http.get<User>(`${this.apiUrl}/${id}`).toPromise();
    return user ? new User(user.id, user.name, user.email) : null;
  }

  async save(user: User): Promise<void> {
    await this.http.post(this.apiUrl, user).toPromise();
  }
}