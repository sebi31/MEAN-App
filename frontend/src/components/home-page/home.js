import ko from 'knockout';
import template from 'text!./home.html';
import api from 'api-base';

class UserViewModel {
    constructor(user){
        this.Name = ko.observable(user.name);
        this.Username = ko.observable(user.username);
        this.Email = ko.observable(user.email);
    }
}

class HomeViewModel {
    constructor(route) {
        var self = this;

        this.message = ko.observable('Welcome to koauthapp-web!');
        this.Username = ko.observable('johncena');
        this.User = ko.observable();
        this.GetUser = function(){
            api.Get('/users/byusername/' + self.Username(), function(response){
                self.User(new UserViewModel(response));
            });

        }
    }

    doSomething() {
        this.message('You invoked doSomething() on the viewmodel.');
        this.GetUser();
    }
}

export default { viewModel: HomeViewModel, template: template };
