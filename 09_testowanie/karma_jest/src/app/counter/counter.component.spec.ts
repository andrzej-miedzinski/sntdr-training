import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('powinien wyświetlać początkową wartość licznika jako 0', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Liczba kliknięć: 0');
  });

  it('powinien zwiększać licznik po kliknięciu przycisku', () => {
    component.increment();
    expect(component.count).toBe(1);
  });
});