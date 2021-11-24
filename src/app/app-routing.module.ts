import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './error/notfound.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AuthGuardService } from './users/login/auth-guard.service';
import { LoginComponent } from './users/login/login.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id/:name', component: UserComponent },
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: ':id', component: ServerComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent, data: { code: 404 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
