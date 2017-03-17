import ko from 'knockout';
import template from 'text!./register.html';
import httpService from 'http-service';

class ViewModel {
    constructor(params) {
        this.Email = ko.observable();
        this.Username = ko.observable();
        this.Password = ko.observable();
    }

    Register(){
        const data = {
            email: this.Email(),
            username: this.Username(),
            password: this.Password()
        };
        
        httpService.Post('/users/register', data)
            .done((response) =>{
                window.location.assign(window.location.origin + '/#login');
            });

    }
}

export default { viewModel: ViewModel, template: template };
