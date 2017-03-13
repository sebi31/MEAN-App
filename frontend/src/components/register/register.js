import ko from 'knockout';
import template from 'text!./register.html';

class UserViewModel {
    constructor(user){
        this.Name = ko.observable(user.name);
        this.Username = ko.observable(user.username);
        this.Email = ko.observable(user.email);
    }
}

class ViewModel {
    constructor(params) {

    }
}

export default { viewModel: ViewModel, template: template };
