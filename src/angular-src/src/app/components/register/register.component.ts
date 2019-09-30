import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { IRegisterRequest } from '../../services/api/requests/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private hidePassword: boolean = true;
  private name: string | null = null;
  private email: string | null = null;
  private username: string | null = null;
  private password: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  private register(): void {
    const request = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    } as IRegisterRequest;

    this.authService.register(request).subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
