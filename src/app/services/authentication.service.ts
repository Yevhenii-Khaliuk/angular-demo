import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  login(user: User): boolean {
    let result;
    this.http.post(this.baseUrl, user, {observe: 'response'}).subscribe(
      res => {
        console.log(res);
        const token = res.headers.get('Authorization');
        localStorage.setItem('token', token);
        result = true;
      },
      err => result = false
    );
    return result;
  }
}
