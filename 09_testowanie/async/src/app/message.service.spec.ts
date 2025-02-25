import { fakeAsync, tick } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('powinien wyświetlić komunikat po 1 sekundzie', fakeAsync(() => {
    let result = '';
    service.showMessageAfterDelay('Hello').then((message) => {
      result = message;
    });

    expect(result).toBe(''); // Komunikat jeszcze nie został wyświetlony
    tick(1000); // Symuluje upływ 1 sekundy
    expect(result).toBe('Hello'); // Komunikat powinien być wyświetlony
  }));
});