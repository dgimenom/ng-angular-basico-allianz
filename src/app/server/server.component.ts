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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.serverStatus = 'Online';
    }, 2000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Ya se ha creado un servidor';
  }

  onUpdateServerName(event: Event){
    const name = (event.target as HTMLInputElement).value;
    this.serverName = name;
  }
  
  onApply(){
    this.serverName = 'myName';
    console.log('heheheh');
    this.serverCreated = true;
  }

  getColor(){
    return this.allowNewServer ? 'green' : 'red';
  }

}