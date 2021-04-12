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
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = false;
    console.log(this.userInfo);
    this.authService.Login(this.userInfo).subscribe(
      (success) => {
        console.log(success);
        localStorage.setItem('token', success.token);
        localStorage.setItem('userData', JSON.stringify(success.user));
        this.loading = true;
        this.router.navigateByUrl('home-computer');
      }, (err) => {
        console.log(err);
        this.loading = true;
      }
    );
  }

}
