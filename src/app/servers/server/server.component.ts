import { Component, Input } from '@angular/core';
import { Server } from '../server.model';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css'],
})
export class ServerComponent {
  @Input() server?: Server;

  constructor(private service: ServersService) {
  }

  getStatusClass(server: Server){
    const classes: {[key: string]: string}  = {
      'online': 'alert-success',
      'offline': 'alert-danger',
      'initializing': 'alert-warning'
    }

    return classes[server.status];
  }

  onChangeStatus() {
    this.service.changeStatus(this.server);
  }
}
