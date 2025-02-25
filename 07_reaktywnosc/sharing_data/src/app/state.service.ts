import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  stateSubject = new BehaviorSubject<{ theme: string }>({ theme: 'light' });

  state$ = this.stateSubject.asObservable();

  updateTheme(theme: string) {
    this.stateSubject.next({ theme });
  }
}