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



import { ImagePipe } from './pipes/image.pipe';





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
    ImagePipe,
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
