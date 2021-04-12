import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-computer',
  templateUrl: './home-computer.component.html',
  styleUrls: ['./home-computer.component.css']
})
export class HomeComputerComponent implements OnInit {
toDay = new Date().toLocaleDateString();
nameUser;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userData') !== null) {
      this.nameUser = JSON.parse(localStorage.getItem('userData')).name;
    }
  }


  Menu() {
    this.router.navigateByUrl('home');
  }
}
