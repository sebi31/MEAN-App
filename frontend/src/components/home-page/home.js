import ko from 'knockout';
import template from 'text!./home.html';
import httpService from 'http-service';
import UserViewModel from 'UserViewModel';

class ViewModel {
    constructor(route) {
        this.Users = ko.observableArray();
        this.Load();
    }

    Load(){
        httpService.Get('/users')
            .done((response) => {
                this.Users(ko.utils.arrayMap(response, (item) =>{
                    return new UserViewModel(item);
                }));
            });
    }
}

export default { viewModel: ViewModel, template: template };
