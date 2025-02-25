import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloComponent]
    });
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Renderuje komponent
  });

  it('powinien pasować do snapshotu', () => {
    expect(fixture.nativeElement.outerHTML).toMatchSnapshot();
  });
});