import { InjectionToken } from "@angular/core";

export interface UserRepository {
    getUsers(): Promise<any[] | undefined>;
}

export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');
  