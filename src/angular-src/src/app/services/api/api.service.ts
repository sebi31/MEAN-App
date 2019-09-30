import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json')
  }

  private buildUrl(url: string) {
    return `http://localhost:3000/api/${url}`;
  }
  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.buildUrl(url), { headers: this.headers });
  }
  protected post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this.buildUrl(url), data, { headers: this.headers });
  }
  protected put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(this.buildUrl(url), data, { headers: this.headers });
  }
}
