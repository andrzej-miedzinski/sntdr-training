import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructComponent } from './destruct.component';

describe('DestructComponent', () => {
  let component: DestructComponent;
  let fixture: ComponentFixture<DestructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestructComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
