import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PagesComponent } from './components/pages/pages.component';
import { NovedadesComponent } from './components/pages/novedades/novedades.component';
import { MuroComponent } from './components/pages/muro/muro.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VerificarEmailComponent } from './components/register/verificar-email/verificar-email.component';
import { CambiarPasswordComponent } from './components/login/cambiar-password/cambiar-password.component';
import { ConfirmarCambioComponent } from './components/login/cambiar-password/confirmar-cambio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidebarComponent,
    PagenotfoundComponent,
    DashboardComponent,
    PagesComponent,
    NovedadesComponent,
    MuroComponent,
    FooterComponent,
    VerificarEmailComponent,
    CambiarPasswordComponent,
    ConfirmarCambioComponent
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
