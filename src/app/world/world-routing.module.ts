import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldComponent} from './pages/world/world.component';
import {BooksComponent} from './pages/books/books.component';
import {AuthorsComponent} from './pages/authors/authors.component';


const routes: Routes = [
  {
    path: '',
    component: WorldComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'authors', component: AuthorsComponent},
      { path: '**', redirectTo: '/world/books'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }
