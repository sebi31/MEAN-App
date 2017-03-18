import ko from 'knockout';
import template from 'text!./login.html';
import authService from 'auth-service';

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
        this.ShowAlert = ko.observable();
        this.Message = ko.observable();
    }

    LogIn(){
        const data = {
            username: this.Username(),
            password: this.Password()
        };

        authService.Login(data)
            .done((response) => {
                this.Message(response.message);
                if(response.success){
                    authService.StoreUserData(response.token, response.user);
                    window.location.assign(window.location.origin);
                }
                else{
                    this.Clear();
                    this.ShowAlert(true);
                }
            });
    }

    Clear(){
        this.Username('');
        this.Password('');
    }

}

export default { viewModel: ViewModel, template: template };
