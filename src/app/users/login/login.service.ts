import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoginService {
  logged = false;

  constructor() { }

  isLogged() {
    return this.logged;
  }
}
