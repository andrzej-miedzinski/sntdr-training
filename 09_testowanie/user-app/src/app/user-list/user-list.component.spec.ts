import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../services/user.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('powinien wyświetlać użytkowników z serwisu', () => {
    fixture.detectChanges(); // Uruchamia ngOnInit
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('li').length).toBe(2);
    expect(compiled.querySelector('li').textContent).toContain('John Doe');
  });
});