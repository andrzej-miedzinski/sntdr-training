import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();  // Kompilowanie komponentu przed testami

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Zastosowanie zmian w komponencie
  });

  it('powinien renderować nagłówek', () => {
    const compiled = fixture.nativeElement;  // Pobierz DOM
    console.log(compiled); // Zaloguj elementy, aby sprawdzić, co się dzieje
    expect(compiled.querySelector('h1')?.textContent).toContain('Witaj!');
  });
});
