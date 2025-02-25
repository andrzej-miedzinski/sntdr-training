import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService] // Rejestrujemy rzeczywisty serwis
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Uruchamia ngOnInit
  });

  it('powinien wyświetlać użytkowników z serwisu', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('li').length).toBe(2);
    expect(compiled.querySelector('li').textContent).toContain('John');
  });
});