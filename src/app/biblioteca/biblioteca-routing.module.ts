import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BibliotecaComponent} from './pages/biblioteca/biblioteca.component';
import {BibliotecaBooksComponent} from './pages/biblioteca-books/biblioteca-books.component';
import {BibliotecaAutoresComponent} from './pages/biblioteca-autores/biblioteca-autores.component';


const routes: Routes = [
  {
    path: '',
    component: BibliotecaComponent,
    children: [
      { path: 'books', component: BibliotecaBooksComponent },
      { path: 'authors', component: BibliotecaAutoresComponent },
      { path: '**', redirectTo: '/biblioteca/books'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
