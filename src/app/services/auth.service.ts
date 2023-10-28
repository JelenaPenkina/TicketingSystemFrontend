import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginReponse } from '../models/userLoginResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logInapiUrl = 'http://localhost:8080/api/v1/login';
  private registerApiUrl = 'http://localhost:8080/api/v1/user/register';

  private currentUser: any = null;

  constructor(private http: HttpClient) {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    this.currentUser = storedUser;

  }

  register(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(this.registerApiUrl, userData);
  }

  login(username: string, password: string): Observable<UserLoginReponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let body = new HttpParams(); //Can also use SearchParams
    body = body.append('username', username);
    body = body.append('password', password);

    // console.log(body.toString())

    return this.http.post<UserLoginReponse>(this.logInapiUrl, body, { headers: headers, withCredentials: true });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  setUser(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    console.log('Stored user:', this.currentUser);
  }

  getUser(): any {
    return this.currentUser;
  }

  getUserName(): string {
    return this.currentUser ? this.currentUser.name : null;
  }

  getUserId(): number {
    console.log(this.currentUser.id);
    return this.currentUser ? this.currentUser.id : null;
  }

  getUserType(): string {
    // console.log(this.currentUser.userType);
    return this.currentUser ? this.currentUser.userType : null;
  }

  isAgent(): boolean {
    const storedUser = this.getUserType();
    // console.log('User Type:', storedUser);
    return storedUser === "AGENT";
  }

  isCustomer(): boolean {
    const storedUser = this.getUserType();
    //  console.log('User Type:', storedUser);
    return storedUser === "CUSTOMER";
  }



  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
