import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getUsers(): Observable<Array<IUser>> {
    return this.get<Array<IUser>>('user');
  }

  public getProfile(): Observable<IUser> {
    return this.get<IUser>('user');
  }
}
