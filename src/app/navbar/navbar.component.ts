import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  Home() {
    this.router.navigateByUrl('home-computer');
  }

  // tslint:disable-next-line:typedef
  Logout() {
    if (this.authService.Logout()) {
      this.router.navigateByUrl('/');
    }

  }
}
