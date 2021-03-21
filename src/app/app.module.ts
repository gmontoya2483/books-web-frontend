import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PagesComponent } from './components/pages/pages.component';
import { NovedadesComponent } from './components/pages/novedades/novedades.component';
import { MuroComponent } from './components/pages/muro/muro.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { ProfileComponent } from './components/pages/profile/profile.component';
import { PhotoComponent } from './components/pages/profile/photo/photo.component';
import { UserSettingsComponent } from './components/pages/profile/user-settings/user-settings.component';
import { CommunityComponent } from './components/pages/profile/community/community.component';
import { ImagePipe } from './pipes/image.pipe';
import { MiComunidadComponent } from './components/pages/mi-comunidad/mi-comunidad.component';
import { ComunidadUsersComponent } from './components/pages/mi-comunidad/comunidad-users/comunidad-users.component';
import { ComunidadBooksComponent } from './components/pages/mi-comunidad/comunidad-books/comunidad-books.component';
import { MisAmigosComponent } from './components/pages/mis-amigos/mis-amigos.component';
import { AmigosFollowingComponent } from './components/pages/mis-amigos/amigos-following/amigos-following.component';
import { AmigosFollowerComponent } from './components/pages/mis-amigos/amigos-follower/amigos-follower.component';
import { BibliotecaComponent } from './components/pages/biblioteca/biblioteca.component';
import { BibliotecaBooksComponent } from './components/pages/biblioteca/biblioteca-books/biblioteca-books.component';
import { BibliotecaAutoresComponent } from './components/pages/biblioteca/biblioteca-autores/biblioteca-autores.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PagenotfoundComponent,
    DashboardComponent,
    PagesComponent,
    NovedadesComponent,
    MuroComponent,
    FooterComponent,
    ProfileComponent,
    PhotoComponent,
    UserSettingsComponent,
    CommunityComponent,
    ImagePipe,
    MiComunidadComponent,
    ComunidadUsersComponent,
    ComunidadBooksComponent,
    MisAmigosComponent,
    AmigosFollowingComponent,
    AmigosFollowerComponent,
    BibliotecaComponent,
    BibliotecaBooksComponent,
    BibliotecaAutoresComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
