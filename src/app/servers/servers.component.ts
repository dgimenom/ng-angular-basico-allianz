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

  // @Input() servers: Server[] = [];
  servers: Server[] = [];
  @Output() onCreate: EventEmitter<Server> = new EventEmitter<Server>();
  serverName = '';

  // @ViewChild('pRef', { static: false }) pReferencia!: ElementRef;

  // constructor() {
  constructor(private service: ServersService) {
    // setTimeout(() => {
    //   this.pReferencia.nativeElement.innerHTML =
    //     'DOM updated successfully accessing with ElementRef!!!';
    //   this.pReferencia.nativeElement.setAttribute('style', 'color: red');
    // }, 3000);
  }

  ngOnInit(){
    this.servers = this.service.getServers();
  }

  onCreateServer(serverInputName: HTMLInputElement) {
    const newCreatedServer = new Server(serverInputName.value, this.servers.length, 'stable');
    // this.servers.push(newCreatedServer);
    // this.onCreate.emit(newCreatedServer);

    this.service.addServer(newCreatedServer);
  }

  getStatusClass(statusServer: string) {
    const badgeClasses: any = {
      stable: 'bg-success',
      failed: 'bg-danger',
      initializing: 'bg-warning',
    };
    return badgeClasses[statusServer];
  }
}
