import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {
userInfo = {
  name : '',
  email : '',
  password : '',
  telephone : '',
  adresse : '',
  photo : null,
  role : '',
  status : '',
  entrepot_id : ''
};
  constructor(private router: Router) { }

  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      select: true
    };
  }

  Back() {
    this.router.navigateByUrl('/home');
  }

  CreateUser(event) {
    console.log(this.userInfo);
  }

}
