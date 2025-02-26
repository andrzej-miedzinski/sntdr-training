import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInComponent } from './all-in.component';

describe('AllInComponent', () => {
  let component: AllInComponent;
  let fixture: ComponentFixture<AllInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
