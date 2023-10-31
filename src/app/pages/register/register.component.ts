
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string | null = null;
  user = {
    name: '',
    email: '',
    password: '',
    userType: 'CUSTOMER'
    
  };

  constructor(private authService: AuthService, private router: Router) { }

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.authService.register(this.user).subscribe(
        () => {
          this.authService.setUser(this.user);
          console.log(this.user);
          this.router.navigate(['/']);
        });
    } else {
      this.errorMessage = 'Please ensure all fields are filled out correctly.';
    }
  }

}
