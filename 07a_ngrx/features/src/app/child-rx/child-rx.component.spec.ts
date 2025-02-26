import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRxComponent } from './child-rx.component';

describe('ChildRxComponent', () => {
  let component: ChildRxComponent;
  let fixture: ComponentFixture<ChildRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
