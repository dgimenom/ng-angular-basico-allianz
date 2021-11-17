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

@NgModule({
  declarations: [AppComponent, ServerComponent, ClientComponent, ServerClassesComponent, ShortenPipe, ShortenWithParamsPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
