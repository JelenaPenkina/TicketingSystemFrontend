import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/enums/userType';
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

  currentUserType: string;

  constructor(private authService: AuthService, private router: Router){
    this.currentUserType = this.authService.getUserType();
  }

  onLogout(): void{
    this.authService.logout();
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  userType() : string {
    return this.authService.getUserType();
  }

  isCustomer() : boolean {
    return this.authService.isCustomer();
  }

  isAgent() : boolean {
    return this.authService.isAgent();
  }

}
