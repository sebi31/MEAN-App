import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    Token: any;
    User: any;

    constructor(private Http: Http) { }

    StoreUserData(token, user) : void {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.Token = token;
        this.User = user;
    }

    LoadToken() : void {
        const token = localStorage.getItem('id_token');
        this.Token = token;
    }

    IsLoggedIn() : boolean {
        return tokenNotExpired();
    }

    Register(user) : any {
        const url = 'http://localhost:3000/api/users';

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.Http.post(url + '/register', user, { headers: headers })
            .map(res => res.json());
    }

    Login(user) : any {
        const url = 'http://localhost:3000/api/users';

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.Http.post(url + '/login', user, { headers: headers })
            .map(res => res.json());
    }

    Logout() : void {
        this.Token = null;
        this.User = null;
        localStorage.clear();
    }

    Get() : any {
        const url = 'http://localhost:3000/api/users';

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.Http.get(url, { headers: headers })
            .map(res => res.json());
    }

    GetProfile() : any {
        const url = 'http://localhost:3000/api/users/profile';

        let headers = new Headers();
        this.LoadToken();
        headers.append('Authorization', this.Token);
        headers.append('Content-Type', 'application/json');

        return this.Http.get(url, { headers: headers })
            .map(res => res.json());
    }
}
