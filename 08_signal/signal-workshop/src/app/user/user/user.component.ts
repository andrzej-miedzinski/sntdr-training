import { Component } from '@angular/core';
import { UserStateService } from '../user-state.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private userState: UserStateService) {}

  // Getter do dynamicznego pobierania informacji o użytkowniku
  get userInfo(): string {
    return this.userState.userInfo();
  }

  updateUser(): void {
    this.userState.updateUser('Jan Kowalski', 30);
  }
}