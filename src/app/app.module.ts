import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ClientComponent } from './client/client.component';
import { FormsModule } from '@angular/forms';
import { ServerClassesComponent } from './server-classes/server-classes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ShortenWithParamsPipe } from './pipes/shorten-with-params.pipe';
import { ServersComponent } from './servers/servers.component';
import { LoggerService } from './servers/logger.service';
import { ServersService } from './servers/servers.service';

@NgModule({
  declarations: [AppComponent, ServerComponent, ClientComponent, ServerClassesComponent, ShortenPipe, ShortenWithParamsPipe, ServersComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    ServersService,
    LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
