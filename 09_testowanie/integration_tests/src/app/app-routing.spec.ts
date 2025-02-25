import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

describe('AppRoutingModule', () => {
  let router: Router;
  let location: Location;
  let fixture: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'users', component: UserListComponent }
        ])
      ],
      declarations: [AppComponent, UserListComponent]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('powinien nawigować do /users i wyświetlić UserListComponent', waitForAsync(async () => {
    await router.navigate(['/users']);
    fixture.detectChanges();
    
    // Sprawdzanie, czy trasa została zmieniona na '/users'
    expect(location.path()).toBe('/users');

    // Sprawdzanie, czy komponent UserListComponent jest widoczny
    const userListComponent = fixture.nativeElement.querySelector('app-user-list');
    expect(userListComponent).toBeTruthy();
  }));
});
