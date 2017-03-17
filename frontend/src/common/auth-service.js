import ko from 'knockout';
import httpService from 'http-service';

class AuthService {
    constructor() {
        this.Token = ko.observable();
        this.User = ko.observable();
    }

    Login(user){
        return httpService.Post('/users/login', user);
    }

    StoreUserData(token, user){
        window.localStorage.setItem('id_token', token);
        window.localStorage.setItem('user', JSON.stringify(user));
        this.Token(token);
        this.User(user);
    }

}

export default new AuthService();
