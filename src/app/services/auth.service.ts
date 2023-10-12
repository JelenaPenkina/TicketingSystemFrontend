import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'; //
import { UserLoginReponse } from '../types/login'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/user/login';
  private currentUser: any = null;

  constructor(private http: HttpClient) {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    this.currentUser = storedUser;
  }

  login(username: string, password: string) : Observable<UserLoginReponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let body = new HttpParams(); //Can also use SearchParams
    body = body.append('username', username);
    body = body.append('password', password);

    console.log(body.toString())

    return this.http.post<UserLoginReponse>(this.apiUrl, body, { headers: headers });
  }

  setUser(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
  }

  getUser(): any {
    return this.currentUser;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
