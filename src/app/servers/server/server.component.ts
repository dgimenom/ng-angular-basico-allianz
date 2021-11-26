import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../server.model';
import { ServersService } from '../services/servers.service';

@Component({
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css'],
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private service: ServersService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getServer(+params['id']).subscribe(server => {
        this.server = server
      });

    });
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
    this.service.changeStatus(this.server).subscribe(server => {
      this.server = server
    });
  }
}
