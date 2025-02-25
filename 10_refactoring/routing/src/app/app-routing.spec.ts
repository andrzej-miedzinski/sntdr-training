import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';

describe('AppRoutingModule', () => {
  let router: Router;
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
          { path: 'products', component: ProductListComponent }
        ])
      ],
      declarations: [AppComponent, HomeComponent, ProductListComponent]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('powinien nawigować do /products i wyświetlić ProductListComponent', async () => {
    await router.navigate(['/products']);
    fixture.detectChanges();
    expect(location.path()).toBe('/products');
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Product');
  });

  it('powinien nawigować do / i wyświetlić HomeComponent', async () => {
    await router.navigate(['/']);
    fixture.detectChanges();
    expect(location.path()).toBe('/');
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Home');
  });
});