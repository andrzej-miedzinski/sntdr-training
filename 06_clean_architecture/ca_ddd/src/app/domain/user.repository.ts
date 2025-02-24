import { InjectionToken } from '@angular/core';
import { User } from './user.entity';

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

export { User };

export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');