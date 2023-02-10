import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public searchedKey: Subject<any>;
  constructor() {
    this.searchedKey = new Subject();
  }
}
