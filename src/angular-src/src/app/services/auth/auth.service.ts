import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/shared/user';
import { ILoginRequest } from '../api/requests/login-request';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { IRegisterRequest } from '../api/requests/register-request';
import { ILoginResponse } from '../api/responses/login-response';
import { IRegisterResponse } from '../api/responses/register-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(protected http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) { 
    super(http);
  }

  public getUser(): IUser {
    return JSON.parse(localStorage.getItem('user')!) as IUser;
  }

  public storeUserData(token: string, user: IUser): void {
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public isLoggedIn(): boolean {
    const token = this.jwtHelper.tokenGetter();
    console.log('token', token);
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(request: ILoginRequest): Observable<ILoginResponse> {
    return this.post<ILoginResponse>('user/login', request);
  }

  public register(request: IRegisterRequest): Observable<IRegisterResponse> {
    return this.post<IRegisterResponse>('user/register', request);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
