import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiComunidadRoutingModule } from './mi-comunidad-routing.module';
import { MiComunidadComponent } from './pages/mi-comunidad/mi-comunidad.component';
import {ComunidadBooksComponent} from './pages/comunidad-books/comunidad-books.component';
import {ComunidadUsersComponent} from './pages/comunidad-users/comunidad-users.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    MiComunidadComponent,
    ComunidadBooksComponent,
    ComunidadUsersComponent
  ],
  imports: [
    CommonModule,
    MiComunidadRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MiComunidadModule { }
