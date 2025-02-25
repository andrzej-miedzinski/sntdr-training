import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DataComponent } from './data.component';
import { DataService } from '../data.service';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('powinien wyświetlić dane z serwisu', waitForAsync(() => {
    fixture.detectChanges(); // Uruchamia ngOnInit
    fixture.whenStable().then(() => {
      fixture.detectChanges(); // Aktualizuje widok po zakończeniu Observable
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('p').textContent).toBe('Hello from service');
    });
  }));
});
