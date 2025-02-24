import { InjectionToken } from '@angular/core';
import { User } from './user.entity';

export interface UserRepository {
  getUsers(): Promise<any[] | undefined>;  
  addUser(user: { name: string; email: string }): Promise<any>;
}
export { User };

export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');