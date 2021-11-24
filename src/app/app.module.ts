import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerComponent } from './servers/server/server.component';

import { ShortenPipe } from './pipes/shorten.pipe';
import { ShortenWithParamsPipe } from './pipes/shorten-with-params.pipe';
import { LoggerService } from './servers/services/logger.service';
import { ServersService } from './servers/services/servers.service';
import { ServersComponent } from './servers/servers.component';
import { CreateServerComponent } from './servers/create-server/create-server.component';
import { CreateServerTdComponent } from './servers/create-server-td/create-server-td.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { LoginComponent } from './users/login/login.component';
import { NotfoundComponent } from './error/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ShortenPipe,
    ShortenWithParamsPipe,
    ServersComponent,
    CreateServerComponent,
    CreateServerTdComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServersService,
    LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
