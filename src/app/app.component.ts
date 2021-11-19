import { Component } from '@angular/core';
import { Server, User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-angular-basico-allianz';

  serverParent: Server[] = [
    new Server('Production', 1, 'stable'),
    new Server('User database', 2, 'stable'),
    new Server('Stage', 3, 'failed'),
    new Server('Development', 4, 'initializing'),
  ];

  public user: User;
  // users: User[];

  constructor() {
    this.user = {
      id: 1,
      name: 'Test',
      sayHello() {
        console.log('HELLO THERE');
      },
    };
    this.user.sayHello();
  }

  handleCreatedServer(server: Server){
    console.log('Server creado', server);
  }
}
