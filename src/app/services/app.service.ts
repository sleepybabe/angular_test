import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(page: number = 2): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?page=${page}`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, userData);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  getResources(): Observable<any> {
    return this.http.get(`${this.baseUrl}/unknown`);
  }

  loginUser(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }

  registerUser(registerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerData);
  }
}