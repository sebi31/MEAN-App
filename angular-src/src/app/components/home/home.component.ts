import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    public Users: Array<any>;

    constructor(private AuthService : AuthService) { }

    ngOnInit() {
        this.AuthService.Get().subscribe(response =>{
            this.Users = response;
        })
    }



}
