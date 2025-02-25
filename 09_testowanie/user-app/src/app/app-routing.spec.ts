import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

describe('AppRoutingModule', () => {
  let router: Router;
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
          { path: 'users', component: UserListComponent }
        ])
      ],
      declarations: [AppComponent, HomeComponent, UserListComponent]
    });
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('powinien nawigować do /users i wyświetlić UserListComponent', async () => {
    await router.navigate(['/users']);
    fixture.detectChanges();
    expect(location.path()).toBe('/users');
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Lista użytkowników');
  });

  it('powinien nawigować do / i wyświetlić HomeComponent', async () => {
    await router.navigate(['/']);
    fixture.detectChanges();
    expect(location.path()).toBe('/');
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Witaj!');
  });
});
