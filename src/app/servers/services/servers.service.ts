import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from '../server.model';
import { LoggerService } from './logger.service';

@Injectable()
export class ServersService {
  api = 'http://localhost:3000/servers';

  constructor(
    private logger: LoggerService,
    private http: HttpClient
  ) {}

  servers: Server[];

  getServers(){
    return this.http.get<Server[]>(this.api);
  }

  getServer(id: number): Observable<Server>{
    return this.http.get<Server>(this.api + '/' + id);
  }


  addServer(server: Server): Observable<Server> {
    this.logger.logData('Added server: ' + server.name);

    const body = {
      name: server.name,
      status: server.status,
      instanceType: server.instanceType,
    }

    return this.http.post<Server>(this.api, body);
  }

  changeStatus(server: Server) {
    const status = server.status === 'online' ? 'offline' : 'online';
    const body = {
      status: status
    };

    return this.http.patch<Server>(this.api + '/' + server.id, body );
  }

}
