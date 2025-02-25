import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('powinien wyświetlać błąd, gdy formularz jest nieprawidłowy', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(component.errorMessage).toBe('Nieprawidłowe dane.');
    expect(compiled.querySelector('p').textContent).toContain('Nieprawidłowe dane.');
  });

  it('powinien przesłać formularz, gdy dane są prawidłowe', () => {
    const compiled = fixture.nativeElement;
    const emailInput = compiled.querySelector('input[placeholder="Email"]');
    const passwordInput = compiled.querySelector('input[placeholder="Hasło"]');

    emailInput.value = 'test@example.com';
    passwordInput.value = 'password123';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const button = compiled.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(component.errorMessage).toBe('');
  });
});