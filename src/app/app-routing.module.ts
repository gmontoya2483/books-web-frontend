import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PagenotfoundComponent} from './components/shared/pagenotfound/pagenotfound.component';
import {PagesComponent} from './components/pages/pages.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {MuroComponent} from './components/pages/muro/muro.component';
import {NovedadesComponent} from './components/pages/novedades/novedades.component';

import {LoginGuardGuard} from './auth/guards/login-guard.guard';

import {ProfileComponent} from './components/pages/profile/profile.component';


const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard ],
    children: [
      { path: 'muro', component: MuroComponent},
      { path: 'dashboard', component: DashboardComponent},
      {
        path: 'biblioteca',
        loadChildren: () => import('./biblioteca/biblioteca.module').then(m => m.BibliotecaModule)
      },
      {
        path: 'comunidad',
        loadChildren: () => import('./mi-comunidad/mi-comunidad.module').then(m => m.MiComunidadModule)
      },
      {
        path: 'amigos',
        loadChildren: () => import('./mis-amigos/mis-amigos.module').then(m => m.MisAmigosModule)
      },
      { path: 'novedades', component: NovedadesComponent},
      { path: 'profile', component: ProfileComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
