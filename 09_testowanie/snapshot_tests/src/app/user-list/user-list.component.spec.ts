import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent]
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.users = [{ name: 'John' }, { name: 'Jane' }];
    fixture.detectChanges(); // Renderuje komponent
  });

  it('powinien pasować do snapshotu', () => {
    expect(fixture.nativeElement.outerHTML).toMatchSnapshot();
  });
});