import { Component, Signal, signal, ViewChild, AfterViewInit, effect } from '@angular/core';
import { ChildSignalComponent } from '../child-signal/child-signal.component';

@Component({
  selector: 'app-parent-signal',
  template: `
    <app-child [data]="message()"></app-child>
    <p>Rodzic otrzymał: {{ receivedData() }}</p>
  `
})
export class ParentSignalComponent implements AfterViewInit {
  message = signal('Wiadomość do dziecka');
  receivedData = signal('');

  @ViewChild(ChildSignalComponent) childComponent!: ChildSignalComponent;

  ngAfterViewInit() {
    effect(() => {
      this.receivedData.set(this.childComponent.data());
    });
  }
}
