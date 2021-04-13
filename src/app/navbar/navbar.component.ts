import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DndDropEvent } from 'ngx-drag-drop';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  favoris;

  constructor(private router: Router, private authService: AuthService, private menuService: MenuService) {
   }

  ngOnInit(): void {
    if (this.menuService.GetFavoris() !== false) {
      const data = this.menuService.GetFavoris();
      console.log(data);
      this.favoris = (data);

    } else {
      this.favoris = '0';
    }
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


  onDragCanceled(event: DragEvent) {
    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {

    console.log('dragover', JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {
    console.log('dropped', JSON.stringify(event, null, 2));
   /* let data = {
      name : '',
      logo : ''
    }; */
    this.menuService.SetFavoris(event.data);
  }
}
