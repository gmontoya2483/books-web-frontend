import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PagenotfoundComponent} from './components/shared/pagenotfound/pagenotfound.component';
import {PagesComponent} from './components/pages/pages.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {MuroComponent} from './components/pages/muro/muro.component';
import {NovedadesComponent} from './components/pages/novedades/novedades.component';
import {VerificarEmailComponent} from './components/register/verificar-email/verificar-email.component';
import {LoginGuardGuard} from './services/guards/login-guard.guard';
import {CambiarPasswordComponent} from './components/login/cambiar-password/cambiar-password.component';
import {ConfirmarCambioComponent} from './components/login/cambiar-password/confirmar-cambio.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {MiComunidadComponent} from './components/pages/mi-comunidad/mi-comunidad.component';
import {ComunidadUsersComponent} from './components/pages/mi-comunidad/comunidad-users/comunidad-users.component';
import {ComunidadBooksComponent} from './components/pages/mi-comunidad/comunidad-books/comunidad-books.component';


const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard ],
    children: [
      { path: 'muro', component: MuroComponent},
      { path: 'dashboard', component: DashboardComponent},
      {
        path: 'comunidad',
        component: MiComunidadComponent,
        children: [
          {path: 'users', component: ComunidadUsersComponent},
          {path: 'books', component: ComunidadBooksComponent},
          {path: '', redirectTo: '/comunidad/users', pathMatch: 'full'},
        ]
      },
      { path: 'novedades', component: NovedadesComponent},
      { path: 'profile', component: ProfileComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'cambiarPassword', component: CambiarPasswordComponent },
  { path: 'confirmarCambioPassword', component: ConfirmarCambioComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'verificarEmail', component: VerificarEmailComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
