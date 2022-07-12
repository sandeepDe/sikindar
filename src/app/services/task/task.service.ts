import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _url = '../../assets/json/task.json';
  constructor(private _http: HttpClient) {}

  getTasks = (): Observable<Task[]> => {
    return this._http.get<Task[]>(this._url);
  };
}
