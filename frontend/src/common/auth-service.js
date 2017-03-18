import ko from 'knockout';
import httpService from 'http-service';
import UserViewModel from 'UserViewModel';

class AuthService {
    constructor() {
        const token = window.localStorage.getItem('id_token');
        const user = window.localStorage.getItem('user');
        this.Token = ko.observable(token);
        this.User = ko.observable(user ? new UserViewModel(JSON.parse(user)) : null);
        this.IsLoggedIn = ko.pureComputed(() =>{
            return this.Token() != null && this.User() != null;
        });
    }

    Login(user){
        return httpService.Post('/users/login', user);
    }

    StoreUserData(token, user){
        window.localStorage.setItem('id_token', token);
        window.localStorage.setItem('user', JSON.stringify(user));
    }

}

export default new AuthService();
