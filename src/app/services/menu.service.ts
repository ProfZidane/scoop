import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
favoris = [];
  constructor() { }

  GetFavoris() {
    if (localStorage.getItem('favoris') !== null) {
      this.favoris = JSON.parse(localStorage.getItem('favoris'));
      return this.favoris;
    } else {
      return false;
    }
  }

  SetFavoris(menu) {
    console.log(this.favoris);

    if (menu !== null || menu !== '') {
      if (!this.favoris.includes(menu)) {
        this.favoris.push(menu);
        localStorage.setItem('favoris', JSON.stringify(this.favoris));
        console.log('ajout au favoris réussi avec success !');
      } else {
        console.log('Widget déjà inscrit dans les favoris !');
      }
    }
  }
}
