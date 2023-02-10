import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeForm } from 'src/app/admin-panel/admin.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/employee';
  }
  postData(body: employeeForm[]): Observable<employeeForm[]> {
    return this.http.post<employeeForm[]>(this.baseUrl, body);
  }
  getData(): Observable<employeeForm[]> {
    return this.http.get<employeeForm[]>(this.baseUrl);
  }
}
