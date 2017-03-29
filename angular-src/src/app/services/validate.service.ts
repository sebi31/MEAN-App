import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

    constructor() { }

    validateRegister(user) : boolean {
        if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined){
            return false;
        }
        return true;
    }

    validateLogin(user) : boolean {
        if(user.username == undefined || user.password == undefined){
            return false;
        }
        return true;
    }

    validateEmail(email : string) : boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    comparePassword(password : string, confirmedPassword : string) : boolean {
        return password === confirmedPassword;
    }
}
