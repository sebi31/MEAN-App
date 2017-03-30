import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    User : Object;

    constructor(private AuthService : AuthService, private Router : Router) { }

    ngOnInit() {
        this.AuthService.GetProfile().subscribe(response => {
            this.User = response.user;
        },
        err => {
            console.log(err);
            return false;
        });
    }

}
