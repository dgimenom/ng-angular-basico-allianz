import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './users/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-angular-basico-allianz';

  get logged() {
    return this.loginService.isLogged();
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  onLogout() {
    this.loginService.logged = false;
    this.router.navigateByUrl('/login');
  }

}
