import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserLoginReponse } from '../../models/userLoginResponse'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string | null = null;
  constructor(
    private authService: AuthService,
    private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.username, this.password)
        .subscribe((data: UserLoginReponse) => {// subscribe function is to kinda notifis us when fetch is complete then to logic inside brackets
          this.authService.setUser(data);
          console.log(data)
          this.router.navigate(['/']);
        });
    } else {
      this.errorMessage = 'Please ensure all fields are filled out correctly.';
    }
  }
}
