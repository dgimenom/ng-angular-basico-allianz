import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-angular-basico-allianz';
  
  public user: User;
  // users: User[];

  constructor(){
  this.user = {
    id: 1,
    name: 'Test',
    sayHello() {
      console.log('HELLO THERE');
    },
  };
  this.user.sayHello();
  }
}
