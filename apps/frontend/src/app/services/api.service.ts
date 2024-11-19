import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGreeting(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>('http://localhost:3000/');
  }
}
