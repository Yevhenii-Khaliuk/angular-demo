import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string;

  constructor() { }


  getAuthorizationHeader(headers: HttpHeaders) {
    this.token = headers.get('Authorization');
  }
}
