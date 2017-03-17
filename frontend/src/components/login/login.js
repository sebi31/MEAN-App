import ko from 'knockout';
import template from 'text!./login.html';
import httpService from 'http-service';

class UserViewModel {
    constructor(user){
        this.Name = ko.observable(user.name);
        this.Username = ko.observable(user.username);
        this.Email = ko.observable(user.email);
    }
}

class ViewModel {
    constructor(params) {
        this.Username = ko.observable();
        this.Password = ko.observable();
    }

    LogIn(){
        const data = {
            username: this.Username(),
            password: this.Password()
        };
        console.log(data);
        httpService.Post('/users/login', data)
            .done((response) =>{
                window.location.assign(window.location.origin);
            });
    }
}

export default { viewModel: ViewModel, template: template };
