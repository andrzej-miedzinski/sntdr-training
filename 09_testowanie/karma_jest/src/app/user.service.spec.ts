import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('powinien zwrócić listę użytkowników', () => {
    const users = service.getUsers();
    expect(users.length).toBe(2);
    expect(users).toContain('John');
    expect(users).toContain('Jane');
  });

  it('powinien dodawać nowego użytkownika', () => {
    service.addUser('Alice');
    const users = service.getUsers();
    expect(users.length).toBe(3);
    expect(users).toContain('Alice');
  });
});