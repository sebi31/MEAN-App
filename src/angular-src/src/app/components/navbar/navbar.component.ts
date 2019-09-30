import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUser } from 'src/app/shared/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private currentUser: IUser | null = null;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) { }

  private isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  private logout(): void {
    this.authService.logout();
  }

  public ngOnInit(): void {
    this.currentUser = this.authService.getUser();
  }
}
