import { Inject, Injectable } from '@angular/core';
import { User, USER_REPOSITORY, UserRepository } from '../domain/user.repository';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: UserRepository) {}

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async createUser(name: string, email: string): Promise<User> {
    const user = new User('', name, email);
    if (!user.isValid()) {
      throw new Error('Invalid user data');
    }
    await this.userRepository.save(user);
    return user;
  }
}