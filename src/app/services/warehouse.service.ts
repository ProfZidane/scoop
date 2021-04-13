import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
getWareURL = 'https://scoop-coopraca.lce-test.fr/api/entrepot';
postWareURL = 'https://scoop-coopraca.lce-test.fr/api/entrepot';
  constructor(private http: HttpClient) { }

  GetHeaders() {
    if (localStorage.getItem('token') !== null) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      });
      return headers;
    }
  }
  GetWarehouse(): Observable<any> {
    return this.http.get(this.getWareURL, { headers: this.GetHeaders()});
  }

  SetWarehouse(data): Observable<any> {
    return this.http.post(this.postWareURL, data, { headers: this.GetHeaders() });
  }
}
