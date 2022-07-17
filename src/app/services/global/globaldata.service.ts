import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {
  isLoading = false;
  constructor() {}

  changeLoadingState(state: boolean) {
    this.isLoading = state;
  }

  getLoadingState() {
    return this.isLoading;
  }
}
