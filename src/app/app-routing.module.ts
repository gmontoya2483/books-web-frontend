import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PagenotfoundComponent} from './components/shared/pagenotfound/pagenotfound.component';
import {PagesComponent} from './components/pages/pages.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {MuroComponent} from './components/pages/muro/muro.component';
import {NovedadesComponent} from './components/pages/novedades/novedades.component';


const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'muro', component: MuroComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'novedades', component: NovedadesComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
