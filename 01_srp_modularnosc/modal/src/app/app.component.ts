import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-modal 
  [visible]="isModalOpen" 
  [title]="'Potwierdzenie'" 
  [content]="'Czy na pewno chcesz kontynuować?'" 
  (close)="onModalClose()" 
  (confirm)="onModalConfirm()">
</app-modal>

<button (click)="openModal()">Otwórz modal</button>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'modal';

  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  onModalClose() {
    this.isModalOpen = false;
    console.log('Modal zamknięty.');
  }

  onModalConfirm() {
    this.isModalOpen = false;
    console.log('Potwierdzono akcję.');
  }
  
}
