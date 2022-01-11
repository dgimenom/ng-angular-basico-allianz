import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Server } from './server.model';

import { ServersService } from './services/servers.service';



@Component({
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent {
  servers: Server[] = [];
  displayForm = false;

  constructor(
    private service: ServersService,
    private router: Router
  ) {}

  ngOnInit(){
    this.loadServers();
  }

  onCreateServer(server: Server) {
    this.service.addServer(server).subscribe(data => {
      this.loadServers();
      this.displayForm = false;
    });

  }

  private loadServers() {
    this.service.getServers().subscribe(
      servers => {
        this.servers = servers;
      },
      (err) => {
        console.error('error recibiendo datos');
        this.router.navigateByUrl('/error');
      },
      () => {
        console.log('Completed!!');
      }
    );
  }

}
