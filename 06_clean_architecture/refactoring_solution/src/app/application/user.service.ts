import { Inject, Injectable } from '@angular/core';
import { USER_REPOSITORY, UserRepository } from '../domain/user.repository';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: UserRepository) {}

  async getUsers() {
    return this.userRepository.getUsers();
  }
}