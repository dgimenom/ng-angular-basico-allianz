import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';

  allowNewServer: boolean = false;

  serverCreationStatus: string = 'No se ha creado un servidor';
  serverName: string = '';
  serverCreated: boolean = false;
  colorStatus: string = 'blue';

  servers = ['Server A', 'Server B', 'Server C', 'Server D'];

  serversNew = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017),
      maintenanceCost: 49.9,
    },
    {
      instanceType: 'large',
      name: 'User database',
      status: 'stable',
      started: new Date(15, 1, 2017),
      maintenanceCost: 25.85,
    },
    {
      instanceType: 'small',
      name: 'Stage',
      status: 'failed',
      started: new Date(15, 1, 2017),
      maintenanceCost: 10.0,
    },
    {
      instanceType: 'small',
      name: 'Development',
      status: 'initializing',
      started: new Date(15, 1, 2017),
      maintenanceCost: 10.0,
    },
  ];

  getStatusClass(statusServer: string){
    const classes = {
      'stable': 'alert-success',
      'failed': 'alert-danger',
      'initializing': 'alert-warning'
    }
    // const classesBadge = ['badge-success', 'badge-danger', 'badge-warning'];
    return classes['failed'];
  }



  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.serverStatus = 'Online';
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Ya se ha creado un servidor';
  }

  onUpdateServerName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.serverName = name;
  }

  onApply() {
    this.serverName = 'myName';
    console.log('heheheh');
    this.serverCreated = true;
  }

  getColor() {
    return this.allowNewServer ? 'green' : 'red';
  }
}