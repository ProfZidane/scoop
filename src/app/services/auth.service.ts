import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginURL = 'https://scoop-coopraca.lce-test.fr/api/login';
testLogin = {
  email : 'admin@gmail.com',
  password : '1111'
};
  constructor(private http: HttpClient) { }

  Login(data): Observable<any> {
    return this.http.post(this.loginURL, data);
  }

  Logout() {
    if (localStorage.getItem('token') !== null) {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      return true;
    } else {
      return false;
    }
  }
}
