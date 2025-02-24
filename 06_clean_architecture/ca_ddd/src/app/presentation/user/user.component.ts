import { Component } from '@angular/core';
import { User } from '../../domain/user.repository';
import { UserService } from '../../application/user.service';

@Component({
  selector: 'app-user',
  template: `
    <div *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  `
})
export class UserComponent {
  user: User | null = null;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.user = await this.userService.getUserById('1');
  }
}