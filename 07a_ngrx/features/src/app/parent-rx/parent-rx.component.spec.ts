import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRxComponent } from './parent-rx.component';

describe('ParentRxComponent', () => {
  let component: ParentRxComponent;
  let fixture: ComponentFixture<ParentRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
