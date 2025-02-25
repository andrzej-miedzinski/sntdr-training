import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('powinien wyświetlać produkty z odpowiednim opisem cenowym', () => {
    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('li');
    expect(items[0].textContent).toContain('Laptop - Expensive');
    expect(items[1].textContent).toContain('Phone - Expensive');
    expect(items[2].textContent).toContain('Book - Affordable');
  });
});