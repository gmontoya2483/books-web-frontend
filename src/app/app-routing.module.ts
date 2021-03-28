import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PagenotfoundComponent} from './shared/pages/pagenotfound/pagenotfound.component';
import {PagesComponent} from './shared/pages/pages/pages.component';
import {LoginGuardGuard} from './auth/guards/login-guard.guard';



const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard ],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
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
      {
        path: 'profile',
        loadChildren: () => import('./me/me.module').then( m => m.MeModule)
      },
      { path: '', redirectTo: '/home', pathMatch: 'full'},
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
