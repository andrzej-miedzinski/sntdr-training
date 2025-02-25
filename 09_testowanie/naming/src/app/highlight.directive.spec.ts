import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';

@Component({
  template: `<p appHighlight>Test</p>`
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    element = fixture.nativeElement.querySelector('p');
  });

  it('powinien zmienić kolor tekstu na czerwony', () => {
    fixture.detectChanges();
    expect(element.style.color).toBe('red');
  });
});