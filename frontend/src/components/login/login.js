import ko from 'knockout';
import template from 'text!./login.html';

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
}

export default { viewModel: ViewModel, template: template };
