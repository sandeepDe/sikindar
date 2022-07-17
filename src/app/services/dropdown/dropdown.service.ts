import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownOption } from 'src/app/models/dropdown';
import { ProjectName } from 'src/app/models/projectname';

// export interface DropdownOption {
//   value: string;
//   viewValue: string;
// }

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor(private _httpClient: HttpClient) {}

  getProjectAndContract = (projectName: string): Observable<ProjectName[]> => {
    let url = `http://localhost:9090/api/projects/${projectName}`;
    return this._httpClient.get<ProjectName[]>(url);
  };

  getAllProjectNames = (): Observable<ProjectName[]> => {
    let url = `http://localhost:9090/api/projects`;
    return this._httpClient.get<ProjectName[]>(url);
  };
}
