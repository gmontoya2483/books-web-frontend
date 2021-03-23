import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MiComunidadComponent} from './pages/mi-comunidad/mi-comunidad.component';
import {ComunidadUsersComponent} from './pages/comunidad-users/comunidad-users.component';
import {ComunidadBooksComponent} from './pages/comunidad-books/comunidad-books.component';


const routes: Routes = [
  {
    path: '',
    component: MiComunidadComponent,
    children: [
      { path: 'users', component: ComunidadUsersComponent },
      { path: 'books', component: ComunidadBooksComponent },
      { path: '**', redirectTo: '/comunidad/users' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiComunidadRoutingModule { }
