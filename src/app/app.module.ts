import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerComponent } from './servers/server/server.component';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ShortenWithParamsPipe } from './pipes/shorten-with-params.pipe';
import { LoggerService } from './servers/services/logger.service';
import { ServersService } from './servers/services/servers.service';
import { ServersComponent } from './servers/servers.component';
import { CreateServerComponent } from './servers/create-server/create-server.component';
import { CreateServerTdComponent } from './servers/create-server-td/create-server-td.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ShortenPipe,
    ShortenWithParamsPipe,
    ServersComponent,
    CreateServerComponent,
    CreateServerTdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServersService,
    LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
