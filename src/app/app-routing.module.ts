import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PagenotfoundComponent} from './components/shared/pagenotfound/pagenotfound.component';
import {PagesComponent} from './components/pages/pages.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {MuroComponent} from './components/pages/muro/muro.component';
import {NovedadesComponent} from './components/pages/novedades/novedades.component';

import {LoginGuardGuard} from './auth/guards/login-guard.guard';

import {ProfileComponent} from './components/pages/profile/profile.component';

import {MisAmigosComponent} from './components/pages/mis-amigos/mis-amigos.component';
import {AmigosFollowingComponent} from './components/pages/mis-amigos/amigos-following/amigos-following.component';
import {AmigosFollowerComponent} from './components/pages/mis-amigos/amigos-follower/amigos-follower.component';
import {BibliotecaBooksComponent} from './biblioteca/pages/biblioteca-books/biblioteca-books.component';
import {BibliotecaAutoresComponent} from './biblioteca/pages/biblioteca-autores/biblioteca-autores.component';


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
        component: MisAmigosComponent,
        children: [
          {path: 'following', component: AmigosFollowingComponent},
          {path: 'followers', component: AmigosFollowerComponent},
          {path: '', redirectTo: '/amigos/following', pathMatch: 'full'},
        ]
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
