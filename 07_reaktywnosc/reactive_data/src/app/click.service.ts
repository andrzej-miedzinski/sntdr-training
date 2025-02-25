import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  private clickSubject = new Subject<void>();

  click$ = this.clickSubject.asObservable();

  notifyClick() {
    this.clickSubject.next();
  }
}