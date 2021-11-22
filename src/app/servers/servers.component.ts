import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Server } from './server.model';

import { ServersService } from './services/servers.service';



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent {
  servers: Server[] = [];
  displayForm = false;

  constructor(private service: ServersService) {}

  ngOnInit(){
    this.servers = this.service.getServers();
  }

  onCreateServer(server: Server) {
    server.id = this.servers.length;
    this.service.addServer(server);
    this.displayForm = false;
  }

}
