import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    Name: string;
    Username: string;
    Email: string;
    Password: string;
    ConfirmedPassword : string;

    constructor(private ValidateService : ValidateService, private FlashMessagesService: FlashMessagesService, private AuthService : AuthService, private Router: Router)
    {
    }

    ngOnInit() {
    }

    onRegisterSubmit(){
        const user = {
            name: this.Name,
            username: this.Username,
            email: this.Email,
            password: this.Password
        }

        //Validation
        if(!this.ValidateService.validateRegister(user)){
            this.FlashMessagesService.show('Please complete all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }

        if(!this.ValidateService.validateEmail(user.email)){
            this.FlashMessagesService.show('Please use a valid email address', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }

        if(!this.ValidateService.comparePassword(this.Password, this.ConfirmedPassword)){
            this.FlashMessagesService.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }

        //Register
        this.AuthService.Register(user).subscribe(response =>{
            if(response.success){
                this.FlashMessagesService.show('User registered', { cssClass: 'alert-success', timeout: 3000 });
                this.Router.navigate(['login']);
            }
            else{
                this.FlashMessagesService.show('Registration failed', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }

}
