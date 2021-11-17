import { Component, Input } from '@angular/core';
import { Server } from '../user.model';

@Component({
  selector: 'app-server-classes',
  templateUrl: './server-classes.component.html',
  styleUrls: ['./server-classes.component.css'],
})
export class ServerClassesComponent {

  //Option 1 Inputs: setting different variable name as attribute
  @Input('title') appTitle: string = '';

  //Option 2 Input: leaving blank and using same variable name
  // @Input() appTitle: string = '';
  

  exampleUppercasePipe = 'this text will be capitalized thanks to a uppercase pipe';
  date: Date = new Date(Date.now());
  
  serverName = '';
  servers: Server[] = [
    new Server('Production', 1, 'stable'),
    new Server('User database', 2, 'stable'),
    new Server('Stage', 3, 'failed'),
    new Server('Development', 4, 'initializing'),
  ];

  constructor() {}

  // Pushes new Server class into the array of Servers
  onCreateServer() {
    const server = new Server(
      this.serverName,
      this.servers.length + 1,
      'stable'
    );
    this.servers.push(server);
  }

  getStatusClass(statusServer:string) {
    const badgeClasses: any = {
      'stable': 'bg-success',
      'failed': 'bg-danger',
      'initializing': 'bg-warning'
    };
    return badgeClasses[statusServer];
  }
}