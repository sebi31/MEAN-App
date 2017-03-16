import ko from 'knockout';
import template from 'text!./login.html';
import $ from 'jquery';

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
        let data = {
            username: this.Username(),
            password: this.Password()
        };
    }
}

export default { viewModel: ViewModel, template: template };
