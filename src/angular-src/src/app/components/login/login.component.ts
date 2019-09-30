import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ILoginRequest } from 'src/app/services/api/requests/login-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private hidePassword: boolean = true;
  private username: string | null = null;
  private password: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  private login(): void {
    const request = {
      username: this.username,
      password: this.password,
    } as ILoginRequest;

    this.authService.login(request).subscribe((response) => {
      this.authService.storeUserData(response.token, response.user);
      this.router.navigate(['']);
    });
  }
}
