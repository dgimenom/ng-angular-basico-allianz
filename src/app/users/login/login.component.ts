import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get logged() {
    return this.loginService.isLogged();
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.loginService.logged = true;
  }

}
