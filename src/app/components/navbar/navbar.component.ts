import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  getLogoPath() {
    return '/assets/images/ticketing-system.png'; 
  }

  constructor(private authService: AuthService, private router: Router){}

  onLogout(): void{
    this.authService.logout();
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

}
