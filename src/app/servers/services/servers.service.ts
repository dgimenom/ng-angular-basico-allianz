import { Injectable } from '@angular/core';
import { Server } from '../server.model';
import { LoggerService } from './logger.service';

@Injectable()
export class ServersService {
  constructor(private logger: LoggerService) {}

  servers: Server[] = [
    new Server('Production', 0, 'online'),
    new Server('User database MySQL master', 1, 'offline'),
    new Server('Stage', 2, 'offline'),
    new Server('Development', 3, 'initializing'),
  ];

  getServers(){
    return this.servers;
  }

  addServer(server: Server) {
    this.servers.push(server);
    this.logger.logData('Added server: ' + server.name);
  }

  changeStatus(server: Server) {
    const status = server.status === 'online' ? 'offline' : 'online';
    this.servers[server.id].status = status;
  }

}
