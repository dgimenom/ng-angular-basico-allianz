import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { LoginService } from './users/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-angular-basico-allianz';
  now = new Date();
  showReceiver = true;

  get logged() {
    return this.loginService.isLogged();
  }

  constructor(private loginService: LoginService, private router: Router) {
    const clock = interval(1000).pipe(
      take(120)
    );

    clock.subscribe(value => {
      this.now = new Date();
    });
  }

  onLogout() {
    this.loginService.logged = false;
    this.router.navigateByUrl('/login');
  }

}
