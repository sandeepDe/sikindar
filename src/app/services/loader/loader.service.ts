import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  startLoader = () => {
    this.isLoading.next(true);
  };

  stopLoader = () => {
    this.isLoading.next(false);
  };
}
