import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    Username : string;
    Password : string;

    constructor(private ValidateService : ValidateService, private FlashMessagesService : FlashMessagesService, private AuthService : AuthService, private Router : Router) {

    }

    ngOnInit() {

    }

    onLoginSubmit(){
        const user = {
            username: this.Username,
            password: this.Password
        }

        if(!this.ValidateService.validateLogin(user)){
            this.FlashMessagesService.show('Please complete all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }

        //Register
        this.AuthService.Login(user).subscribe(response =>{
            if(response.success){
                this.AuthService.StoreUserData(response.token, response.user);
                this.FlashMessagesService.show('Login successful', { cssClass: 'alert-success', timeout: 3000 });
                this.Router.navigate(['']);
            }
            else{
                this.FlashMessagesService.show('Login failed - ' + response.message, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }

}
