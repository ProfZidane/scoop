import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userInfo = {
  email : '',
  password : ''
};
loading;
error = {
  error_404 : false
};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = false;
    this.error.error_404 = false;
    console.log(this.userInfo);
    this.authService.Login(this.userInfo).subscribe(
      (success) => {
        console.log(success);
        localStorage.setItem('token', success.token);
        localStorage.setItem('userData', JSON.stringify(success.user));
        setTimeout( () => {
          this.loading = true;
          this.router.navigateByUrl('home-computer');
        }, 1000);
      }, (err) => {
        console.log(err);
        setTimeout( () => {
          this.loading = true;
          this.error.error_404 = true;
        }, 1000);
      }
    );
  }

}
