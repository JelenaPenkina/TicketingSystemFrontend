
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // User registration data model (you may need to adapt this based on your form fields)
  user = {
    name: '',
    email: '',
    password: ''
    
  };

  constructor(private authService: AuthService, private router: Router) { }

  register() {

    this.authService.register(this.user).subscribe(
      () => {// subscribe function is to kinda notifis us when fetch is complete then to logic inside brackets
        this.authService.setUser(this.user);
        console.log(this.user)
        this.router.navigate(['/']);
      });
  }

}
