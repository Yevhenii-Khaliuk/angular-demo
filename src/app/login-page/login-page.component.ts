import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User = new User();
  errorMessage = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const x = this.authenticationService.login(this.user);
    console.log(x);
    x.subscribe(
      res => this.router.navigate(['/home']),
      err => this.errorMessage = ''
    );
  }

}
